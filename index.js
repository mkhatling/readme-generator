const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (responses) =>
`README template goes here`;

inquirer
    .prompt([{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of you project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your table of content sections?',
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'What are steps to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for use. Include screenshots if possible:',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose your licenses',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License', 'The Unilicense'],
    },
    {
        type: "input",
        message: 'Add license if not listed above',
        name: "addLicense",
    },
    {
        type: 'input',
        message: 'What are guidlines for how to contribute?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Any tests for your application? Provide instructions on how to run them here',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: "githubUsername",
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])