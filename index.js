const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// These are a series of questions that determine ther context of the read me file.
const questions = [
    "What will be the name of your repository?",
    "Please give a brief discription of you repository",
    "How do I install the application? ",
    "Offer directions on how to get started using your new application.",
    "What is the purpose of your repository/How do you plan on using it?",
    "Who contributed to this project?",
    "What license would you like?",
    "What is your e-mail address?",
    "What is your github User name?"
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
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'directions',
            },

            {
                type: 'input',
                message: questions[4],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'credits',
            },
            {
                type: 'list',
                message: questions[6],
                choices: ['None', "MIT", "Apache", "ISC"],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'contactInfo',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'userName',
            },
        ])
        .then((data) => fs.writeFileSync("Sample-Readme.md", generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to Sample-readme.md'))
        .catch((err) => console.error(err));
}
// Calls the function for the promped inquirer to begin

init()
