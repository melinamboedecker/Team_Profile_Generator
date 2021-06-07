//packages and files needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const render = require("./src/HtmlGenerator.js")
const validate = require('./lib/Validate.js')

//array for all team members
const teamMemberArray = [];

const startQuestion = [
    {
        type: 'confirm',
        name: 'start',
        message: "This is a Team Profile generator. You will be prompted with a series of questions about the members of your team, and then the pertinent information will be populated into an html file you can use to display the contact information for your team. Do you wish to continue with this application?"
    },
]

//questions for user input
const mgrQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Team Manager's name",
       
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the Team Manager's employee ID",
        idInput: true,
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Team Manager's email address",
        emailInput: true,
    },
    {
        type: 'input',
        name: 'officenumber',
        message: "Enter the Team Manager's office number",
        phoneNumberInput: true,
        // validate: function( value ) {
        //     var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
        //     if (pass) {
        //     return true;
        //     } else {
        //     return "Please enter a valid phone number";
        //      }
        //     }
    },
    {
        type: 'list',
        name: 'whatNext',
        message: 'What would you like to do next?',
        choices: ['Enter an Engineer', 'Enter an Intern', 'Finished entering personnel, build my team profile'],
    }
]
mgrQuestions.forEach(el => el.validate = validate.bind(el));

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
        idInput: true,
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Engineer's email address",
        emailInput: true,
        // validate(value) {
        //     const okay = value.includes('@') && value.includes('.');
        //     if (okay) {
        //         return true;
        //     }

        //     return "Please enter a valid email address"
        // } 
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
engineerQuestions.forEach(el => el.validate = validate.bind(el));

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
        idInput: true,
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the Intern's email address",
        emailInput: true,
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
internQuestions.forEach(el => el.validate = validate.bind(el));

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
            if (mgrdata.whatNext === 'Enter an Intern') {
                enterIntern();
            } else if (mgrdata.whatNext === 'Enter an Engineer') {
                enterEngineer();
            } else {
                createHtml(teamMemberArray);
            }
        });
}

function enterEngineer() {
    return inquirer 
        .prompt(engineerQuestions)
        .then(engdata => {
            const userEngineer = new Engineer (engdata.name, engdata.id, engdata.email, engdata.github)
            teamMemberArray.push(userEngineer)
            if (engdata.whatNext === 'Enter another Engineer') {
                enterEngineer();
            } else if (engdata.whatNext === 'Enter an Intern') {
                enterIntern();
            } else {
                createHtml(teamMemberArray);
            }
        })
}

function enterIntern() {
    return inquirer 
        .prompt(internQuestions)
        .then(data => {
            const userIntern = new Intern (data.name, data.id, data.email, data.school)
            teamMemberArray.push(userIntern)
            if (data.whatNext === 'Enter another Intern') {
                enterIntern();
            } else if (data.whatNext === 'Enter an Engineer') {
                enterEngineer();
            } else {
                createHtml(teamMemberArray);
            }
        })
}

function createHtml(teamMemberArray) {
    
    const filename = './dist/myteam.html'

    fs.writeFile(filename, 
        render(teamMemberArray)
        , (err) =>
       err ? console.log(chalk.red(err)) : console.log(chalk.green('----------------------------------------\nHTML file for your team has been created\ngo to '+filename+'\n----------------------------------------'))
        );

}



start();