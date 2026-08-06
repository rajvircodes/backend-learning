import fs from "node:fs";
import { pipeline } from "node:stream/promises";

// 1. Monitor the log file for additions
async function* watchLogFile(filePath) {
  // Open file in read-only mode ('r')
  const fd = await fs.promises.open(filePath, "r");
  const stats = await fd.stat();

  // Start reading from the very end of the current file
  let currentPosition = stats.size;

  // Watch for file modifications
  const watcher = fs.promises.watch(filePath);

  try {
    for await (const event of watcher) {
      if (event.eventType === "change") {
        const newStats = await fd.stat();
        const newSize = newStats.size;

        if (newSize > currentPosition) {
          const bufferSize = newSize - currentPosition;
          const buffer = Buffer.alloc(bufferSize);

          // Read only the newly appended chunk
          await fd.read(buffer, 0, bufferSize, currentPosition);
          currentPosition = newSize;

          // Yield the new log lines
          yield buffer.toString("utf-8");
        }
      }
    }
  } finally {
    // Ensure file descriptors are closed if aborted
    await fd.close();
  }
}

// 2. Stream the changes safely to the console
async function startWatching() {
  const logPath = "./app.log";
  console.log(`👀 Watching for changes in ${logPath}...`);

  try {
    // pipeline handles backpressure automatically
    await pipeline(watchLogFile(logPath), process.stdout);
  } catch (err) {
    console.error("❌ Stream error:", err);
  }
}

startWatching();
