const fs = require('fs');
const path = require('path');

function createLogs(directory, numFiles) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    process.chdir(directory);

    for (let i = 1; i <= numFiles; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        
        console.log(fileName);
    }
}

const logDirectory = 'Logs';

const numberOfLogs = 10;

createLogs(logDirectory, numberOfLogs);
