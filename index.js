const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = (responses) =>
`# ${responses.title}

## Description
${responses.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)

## Installation
${responses.installation}

## Usage
${responses.usage}

## Licenses 
${responses.license}

## Contribute
${responses.contribute}

## Tests
${responses.tests}

## Questions
Here's my GitHub profile: https://github.com/${responses.githubUsername}
If you have questions about this project, please email me at ${responses.email} 

Thanks for checking out my project!
`;

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
.then((responses) => {
    const readmeContent = generateReadme(responses);

    fs.writeFile('README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    );
})