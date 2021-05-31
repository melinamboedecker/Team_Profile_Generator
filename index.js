//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//questions for user input
const mgrQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Enter the Team Manager's name",
        validate: val => /[a-zA-z]/gi.test(val),  
    },
    {
        type: 'input',
        name: 'mamagerid',
        message: "Enter the Team Manager's employee ID",
    },
    {
        type: 'input',
        name: 'manageremail',
        message: "Enter the Team Manager's email address",
    },
    {
        type: 'input',
        name: 'officenumber',
        message: "Enter the Team Manager's office number",
    }
   
]

const whatNextQuestion = [
    {
        type: 'list',
        name: 'whatNext',
        message: 'What would you like to do next?',
        choices: ['Enter an Engineer', 'Enter an intern', 'Finished entering personnel, build my team profile'],
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "Enter the Engineer's name",
    },
    {
        type: 'input',
        name: 'engineerid',
        message: "Enter the Team Manager's employee ID",
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: "Enter the Team Manager's email address",
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: "Enter the Engineer's GitHub username",
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Enter the Engineer's name",
    },
    {
        type: 'input',
        name: 'internid',
        message: "Enter the Team Manager's employee ID",
    },
    {
        type: 'input',
        name: 'internemail',
        message: "Enter the Intern's email address",
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the Intern's school",
    }
]