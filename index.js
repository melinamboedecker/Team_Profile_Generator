//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

//array for all team members
const teamMemberArray = [];

const startQuestion = [
    {
        type: 'confirm',
        name: 'start',
        message: "Here will be the verbiage at the start of the app explaining what it will do"
    },
]

//questions for user input
const mgrQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Team Manager's name",
        // validate: val => /[a-zA-z]/gi.test(val),  
        // validate: val => /[a-zA-z]/,
    },
    {
        type: 'number',
        name: 'id',
        message: "Enter the Team Manager's employee ID",
        validate: val => /[0-9]/,
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Team Manager's email address",
        validate(value) {
            const okay = value.includes('@') && value.includes('.');
            if (okay) {
                return true;
            }

            return "Please enter a valid email address"
        } 
    },
    {
        type: 'input',
        name: 'officenumber',
        message: "Enter the Team Manager's office number",
    },
    {
        type: 'list',
        name: 'whatNext',
        message: 'What would you like to do next?',
        choices: ['Enter an Engineer', 'Enter an Intern', 'Finished entering personnel, build my team profile'],
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Engineer's employee ID",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Engineer's email address",
        validate(value) {
            const okay = value.includes('@') && value.includes('.');
            if (okay) {
                return true;
            }

            return "Please enter a valid email address"
        } 
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the Engineer's GitHub username",
    },
    {
        type: 'list',
        name: 'whatNext',
        message: 'What would you like to do next?',
        choices: ['Enter another Engineer', 'Enter an Intern', 'Finished entering personnel, build my team profile'],
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Intern's employee ID",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Intern's email address",
        validate(value) {
            const okay = value.includes('@') && value.includes('.');
            if (okay) {
                return true;
            }

            return "Please enter a valid email address"
        } 
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the Intern's school",
    },
    {
        type: 'list',
        name: 'whatNext',
        message: 'What would you like to do next?',
        choices: ['Enter another Intern', 'Enter an Engineer', 'Finished entering personnel, build my team profile'],
    }
]

function start() {
    return inquirer
        .prompt(startQuestion)
        .then(startdata => {
            if (startdata.start) {
                enterManager();
            }
        })
}

function enterManager() {
    return inquirer
        .prompt(mgrQuestions)
        .then(mgrdata => {
            const userManager = new Manager (mgrdata.name, mgrdata.id, mgrdata.email, mgrdata.officenumber)
            teamMemberArray.push(userManager)
            console.log(userManager);
            if (mgrdata.whatNext === 'Enter an Intern') {
                enterIntern();
            } else if (mgrdata.whatNext === 'Enter an Engineer') {
                enterEngineer();
            } else {
                createHtml();
            }
        });
}

function enterEngineer() {
    return inquirer 
        .prompt(engineerQuestions)
        .then(engdata => {
            const userEngineer = new Engineer (engdata.name, engdata.id, engdata.email, engdata.github)
            teamMemberArray.push(userEngineer)
            console.log(userEngineer);
            if (engdata.whatNext === 'Enter another Engineer') {
                enterEngineer();
            } else if (engdata.whatNext === 'Enter an Intern') {
                enterIntern();
            } else {
                createHtml();
            }
        })
}

function enterIntern() {
    return inquirer 
        .prompt(internQuestions)
        .then(data => {
            const userIntern = new Intern (data.name, data.id, data.email, data.school)
            teamMemberArray.push(userIntern)
            console.log(userIntern);
            if (data.whatNext === 'Enter another Intern') {
                enterIntern();
            } else if (data.whatNext === 'Enter an Engineer') {
                enterEngineer();
            } else {
                createHtml();
            }
        })
}

function createHtml() {
    console.log('go make html file')
    console.log(teamMemberArray)
}



start();