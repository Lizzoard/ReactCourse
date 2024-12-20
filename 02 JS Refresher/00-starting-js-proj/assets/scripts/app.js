// import { apiKey } from "./utils";

import apiKey from "./utils.js";

// console.log(apiKey);

// const userMessage = "Hello User!!!";

// console.log(userMessage);

// function greet() {   
//   console.log("Hello");
// }

// function greetUser(userName, message="Hello!") {
//   console.log(userName);
//   console.log(message);
// }

// function greetUser(userName, message = "Bye", status) {
//   return "Hi, welcome" + userName + ". " + message + " your status is " + status;
// }

// greetUser("max", "hello");
// greetUser("sam", "good to see you", true);
// greet();

// const hobbies = ["Sports", "Cooking", "Movies"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Cooking");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ name : item }));
// console.log(editedHobbies);

// const userNameData = ["Björn", "Bauer"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// const [firstName, lastName] = ["Lillith", "Bauer"];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "John",
//   age: 43
// };

// console.log(userName);
// console.log(age);
 
// Example for Destructuring in Function Parameter Lists

// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', currency);
// }

/* Instead of accessing the order properties via "dot notation"
    inside the storeOrder function body, you could use destructuring
    like this:
*/

// function storeOrder({ id, currency }) {
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }

// Using spread operator to merge two arrays 

// const hobbies = ["Sports", "Cooking"];
// const newHobbies = ["Gaming", "Reading", "Languages"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// Using spread operator to merge objects

// const user = {
//   name: "John",
//   age: 43
// }

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }

// console.log(extendedUser);

// Some examples of loops and their usage

// const password = prompt('Please enter password');

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// Timeout function and usage

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);

// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("hi");
//   }
//   greet();
// }

