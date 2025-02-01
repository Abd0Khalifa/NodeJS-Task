// const os = require("os"); // is ? ? ? ? ? ?
// const fs = require("fs"); // fs ? ? ? ? ? ?

// // blocking way
// console.log("A");

// /*
// const content = fs.readFileSync("hello.txt", { encoding: "utf-8" }); // 7s

// console.log("B", content);
// */

// function readFileHandler(error, data) {
//   if (error) {
//     console.log("Error had happened and i can't log the content of the file");
//     return;
//   }

//   console.log("B", data);
// }

// fs.readFile("hello.txt", { encoding: "utf-8" }, readFileHandler);

// console.log("c");

// // module pattern [⚠️]
// const Person = ({ firstName, lastName }) => {
//   const _firstName = firstName;
//   const _lastName = lastName;

//   function _concatPersonName() {
//     return `${_firstName} ${_lastName}`;
//   }

//   return {
//     printPersonName: () => console.log(_concatPersonName()),
//   };
// };
