// take input from the user that will represent the file name
// then process the file name by using fs
// use the featue of async once and the sync once
// the output should be the content of the file
// handle gracefully the errors in case of the file is no exist
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// [ LAP ⚠️⚠️ LAP] search for package called 'readline-sync' 👇👇👇 read plz
// 1. install readline-sync
// 2. import the package
// 3. do the same below implementation but in another file with the third party lib (readline-sync)
// 4. loop over the terminal and give choice to the user to read or write on the file
// Hello customer, please pick from one of the below choices 
// [1]. readfile
    // [1.1] => enter the name of the file
    // [1.2] => handle if the file exists, print the content, and continue asking him to do another activity 
    // [1.3] => close or pick close or terminate the app, gracefully terminate it
// [2]. write content on file
    // [2.1] please enter the file that you want to write in
    // [2.2] if file exists, remove it and create another pure empty file
    // [2.3] please enter the content of  the file
    // [2.4] Saved successfully, and show him the options in order to print the content of the file
// [3] exit app
// [4] Bonus, any one who will be writing on the files using the core module or fs.stream [writing streams capabilitlies]

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