var colors = require('colors/safe');
var emoji = require('node-emoji');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: ['cyan', 'underline'],
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: ['blue', 'bold', 'underline'],
    error: 'red'
  });

console.group(`${emoji.get('coffee')} ${colors.debug('Making a cooffee and showing the app logs:')}`);
console.log(`${emoji.random().emoji} ${colors.silly('hello')}`);
console.log(`${emoji.random().emoji} ${colors.input('hello')}`);
console.log(`${emoji.random().emoji} ${colors.verbose('OMG Rainbows!')}`);
console.log(`${emoji.random().emoji} ${colors.info('inverse the color')}`);
console.log(`${emoji.random().emoji} ${colors.data('inverse the color')}`);
console.log(`${emoji.random().emoji} ${colors.help('inverse the color')}`);
console.log(`${emoji.random().emoji} ${colors.warn('Run the trap')}`);
console.log(`${emoji.random().emoji} ${colors.debug('i like cake and pies')}`);
console.log(`${emoji.random().emoji} ${colors.error('hello')}`);
console.groupEnd();