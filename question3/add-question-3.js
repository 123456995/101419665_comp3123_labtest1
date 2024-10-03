const fs = require('fs');
const path = require('path');

function createLogs(directory, numFiles) {
    // Ensure the directory exists
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // Change the process to the new Logs directory
    process.chdir(directory);

    // Create and write to log files
    for (let i = 1; i <= numFiles; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        
        // Output the file names to the console
        console.log(fileName);
    }
}

// Directory where logs will be created
const logDirectory = 'Logs';

// Number of log files to create
const numberOfLogs = 10;

// Call the function
createLogs(logDirectory, numberOfLogs);
