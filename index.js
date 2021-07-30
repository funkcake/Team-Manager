const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } = require('constants');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved');
    })
    
}

questions = () => {
    inquirer
    .prompt([{
        type: 'list',
        name: 'role',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
        message: 'What role would you like to make?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'what is the school?',
        when: function (answers) {
            return answers.role === 'Intern'
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is the GitHub?',
        when: function (answers) {
            return answers.role === 'Engineer'
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'what is your office number?',
        when: function (answers) {
            return answers.role === 'Manager'
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'what is their name?',
        
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is their id?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is their email?',
        
    }
    
])
    .then(answers => {
        console.log(answers);
        if (answers.role === Employee){
            const newE = new Employee(answers.name, answers.id, answers.email);
            writeToFile(ReadMe.md, newE);
        } else if (answers.role === Intern){
            const newE = new Intern(answers.name, answers.id, answers.email, answers.school);
            writeToFile(ReadMe.md, newE);
        } else if (answers.role === Engineer){
            const newE = new Engineer(answers.name, answers.id, answers.email, answers.github);
            writeToFile(ReadMe.md, newE);
        } else if (answers.role === Manager){
            const newE = new Manager(answers.name, answers.id, answers.email, answers.office);
            writeToFile(ReadMe.md, newE);
        }
    })
    .catch(error => {
        if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}
questions();
// TODO: Create a function to write README file


