const EventEmmitet = require('events');

class Logger extends EventEmmitet {
  execute(cb) {
    console.log('Before');
    this.emit('Start');
    cb();
    this.emit('Finish');
    console.log('After')
  }
};

const logger = new Logger();

logger.on('Start', () => console.log('Starting'));
logger.on('Finish', () => console.log('Finishing'))
logger.on('Finish', () => console.log('It is donde'));

logger.execute(() => console.log('hello world'));