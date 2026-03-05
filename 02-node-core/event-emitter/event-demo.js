const EventEmitter = require('events')

const emitter = new EventEmitter()


emitter.on("greet", ()=>{
    console.log("Hello Rajvir!");
    
})

emitter.emit('greet')