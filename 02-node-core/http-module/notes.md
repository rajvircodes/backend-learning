# HTTP Module

Node provides built-in `http` module to create servers.

Basic Flow:

Client → Request → Server → Response

Important parts:

- http.createServer()
- req (request object)
- res (response object)
- server.listen(port)

Example:

http.createServer((req,res)=>{
  res.end("Hello")
})