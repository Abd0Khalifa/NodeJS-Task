
const fs = require("fs"); // core module
const readlineSync = require('readline-sync');

function mainMenu() {
  console.log('Hello customer, please pick from one of the below choices:');
  console.log('[1] Read file');
  console.log('[2] Write content to file');
  console.log('[3] Exit app');

  const choice = readlineSync.question('Enter your choice: ');

  switch (choice) {
    case '1':
      readFile();
      break;
    case '2':
      writeFile();
      break;
    case '3':
      console.log('Exiting the application. Goodbye!');
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
      mainMenu();
  }
}

function readFile() {
  const fileName = readlineSync.question('Enter the name of the file to read: ');

  if (fs.existsSync(fileName)) {
    const content = fs.readFileSync(fileName, 'utf8');
    console.log(`\nContent of ${fileName}:\n`);
    console.log(content);
  } else {
    console.log('File does not exist.');
  }

  mainMenu();
}

function writeFile() {
  const fileName = readlineSync.question('Enter the name of the file to write: ');

  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
    console.log(`Existing file ${fileName} has been removed.`);
  }

  const content = readlineSync.question('Enter the content to write to the file: ');
  fs.writeFileSync(fileName, content);
  console.log('Content saved successfully.');

  const viewContent = readlineSync.question('Do you want to view the content of the file? (y/n): ');

  if (viewContent.toLowerCase() === 'y') {
    const newContent = fs.readFileSync(fileName, 'utf8');
    console.log(`\nContent of ${fileName}:\n`);
    console.log(newContent);
  }

  mainMenu();
}

mainMenu();