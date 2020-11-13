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

<<<<<<< HEAD
const pwd = require('./pwd.js');

pwd()
>>>>>>> d29224525c16ce1772cf5c46d56eeab7bbd3c047
=======
const pwd = require('./pwd');
const fs = require('fs');
fs();
pwd();
>>>>>>> 8e97b8ffc6bb4fea3123971f08f8e9f84f935d70
