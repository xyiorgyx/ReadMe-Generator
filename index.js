const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
"What will be the name of your repository?",
"Please give a brief discription of you repository", 
"What license would you like?",
"What is the purpose of your repository and how do you plan on using it?"
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile("README.md",)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
