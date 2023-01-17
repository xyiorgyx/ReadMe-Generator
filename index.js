const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
"What will be the name of your repository?",
"Please give a brief discription of you repository",
"How is the program installed?", 
"What is the purpose of your repository and how do you plan on using it?",
"Who contributed to this project?",
"What license would you like?"
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile("README.md", generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'discription',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'installation',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'credits',
      },
    {
      type: 'list',
      message: questions[6],
      choices: ['None',"MIT", "Apache", "ISC"], 
      name: 'license',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
  .then writeToFile(fileName, data)
}

init();
