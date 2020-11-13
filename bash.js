//Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
<<<<<<< HEAD
    const pwd = require('./pwd');
    if (cmd === 'pwd') {
        pwd;
    } else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
    }
});
=======
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
});

const pwd = require('./pwd.js');

pwd()
>>>>>>> d29224525c16ce1772cf5c46d56eeab7bbd3c047
