
const fs = require('./ls');
const pwd = require('./pwd');
//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls'){
        fs();
    }

    process.stdout.write(data);
    process.stdout.write('\nprompt > ');

});


pwd()



