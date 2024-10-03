const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

fs.readdir(logsDir, (err, files) => {
    if (err) {
        return console.error('Unable to read directory:', err);
    }

    for (const file of files) {
        const filePath = path.join(logsDir, file);
        fs.unlink(filePath, err => {
            if (err) {
                console.error('Failed to delete file:', err);
            } else {
                console.log('delete files...', file);
            }
        });
    }

    fs.rmdir(logsDir, err => {
        if (err) {
            console.error('Failed to remove directory:', err);
        } else {
            console.log('Logs directory removed.');
        }
    });
});
