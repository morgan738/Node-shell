const fs = require('./ls')
const pwd = require('./pwd');
//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
});

pwd()

fs()