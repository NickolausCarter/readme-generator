// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Please provide your GitHub username: (Required)',
      validate: userName => {
        if (userName) {
          return true;
        } else {
          console.log('You must provide your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address: (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('You must provide an email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You must provide a title!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to provide a description for your project?',
      default: true
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
      when: ({ confirmDescription }) => {
        if (confirmDescription) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain the intended use of this project:'
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to add a license to this project?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for this project.',
      choices: ['ISC', 'IPL 1.0', 'MIT', 'MPL 2.0', 'PDDL'],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmContribute',
      message: 'Can other developers contribute to this project?',
      default: true
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Explain how other developers can contribute to this project:',
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions:'
    }
  ]);
};

// TODO: Create a function to write README file
const writeToFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', pageContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Readme created!'
      });
    });
  });
};

// Promise calls to run through program.
promptUser()
  .then(readmeObj => {
    return generateMarkdown(readmeObj);
  })
  .then(pageContent => {
    return writeToFile(pageContent);
  })
  .catch(err => {
    console.log(err);
  });
