const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// These are a series of questions that determine ther context of the read me file.
const questions = [
    "What will be the name of your repository?",
    "Please give a brief discription of you repository",
    "How is the program installed?",
    "What is the purpose of your repository/How do you plan on using it?",
    "Who contributed to this project?",
    "What license would you like?",
    "What is your e-mail address?"
];




// An array of questions for the user to answer
async function init() {
    await inquirer
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
                message: questions[5],
                choices: ['None', "MIT", "Apache", "ISC"],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'contact-info',
            },
        ])
        .then ((data) => fs.writeFileSync("Readme.md", generateMarkdown(data)))
        err ? console.error(err) : console.log('File Created')
    }
// Calls the function for the promped inquirer to begin
init()
