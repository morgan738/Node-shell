//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const pwd = require('./pwd');
    if (cmd === 'pwd') {
        pwd;
    } else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
    }
});