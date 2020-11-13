<<<<<<< HEAD
/* process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    }
});

 */

 module.exports(process.stdin.on('pwd', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    }

 }))
=======
module.exports = function() {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    })
}
>>>>>>> d29224525c16ce1772cf5c46d56eeab7bbd3c047
