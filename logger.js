const EventEmitter = require('events');
const UUID = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //call emit
        this.emit('message', {id: UUID.v4(), msg:msg});
    }
}
module.exports = Logger;


/* IN index.js

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data)=>{
    console.log(data);
});

logger.log('message 1');
logger.log('message 2');
logger.log('message 3');


*/