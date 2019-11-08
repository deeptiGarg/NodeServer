const EventEmitter = require('events');

// Create a class
class MyEventEmitter extends EventEmitter{}

//Initiate object
const emitter_obj = new MyEventEmitter();

//Create a event listener
emitter_obj.on('event',()=>{console.log("Event is fired!")});

emitter_obj.on('hello',()=>{console.log("Hello is fired!")});

// Emit an event
emitter_obj.emit('event');
emitter_obj.emit('event');
emitter_obj.emit('hello');
