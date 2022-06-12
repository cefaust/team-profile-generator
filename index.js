const fs = require('fs');
const inquirer = require('inquirer');
const Handlebars = require('handlebars');

Handlebars.registerHelper('ifEquals', function (arg1, arg2, opts) {
  return (arg1 === arg2) ? opts.fn(this) : opts.inverse(this);
});

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');


const rawTemplate = fs.readFileSync(`${__dirname}/template.html`, 'utf8');
const handlebarsTemplate = Handlebars.compile(rawTemplate);

/**
 * 1. (and question to repeat): What type of employee would you like to add?
 *   - Manager
 *   - Engineer
 *   - Intern
 *   - (I'm done)
 */

const IM_DONE = 'I\'m done';

function getFirstQuestion(isFirst) {
  let choices = ['Manager', 'Engineer', 'Intern'];
  if (!isFirst) {
    choices.push(IM_DONE);
  }
  const questions = [
    {
      type: 'list',
      name: 'employeeRole',
      message: 'What type of employee would you like to add?',
      choices: choices
    },
  ];
  return questions;
}

function getFollowupQuestions(role) {
  const questions = [
    {
      type: 'input',
      name: 'employeeName',
      message: 'What is the employee\'s name?'
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is the employee\'s ID number?'
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'What is the employee\'s email?'
    }
  ];

  if (role === 'Manager') {
    const managerQuestion = {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?'
    };
    questions.push(managerQuestion);
  } else if (role === 'Engineer') {
    const engineerQuestion = {
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s github username?'
    };
    questions.push(engineerQuestion);
  } else if (role === 'Intern') {
    const internQuestion = {
      type: 'input',
      name: 'school',
      message: 'What school does the Intern go to?'
    };
    questions.push(internQuestion);
  }


  return questions;
}

let isFirst = true;
let answers = [];

function askFirstQuestion() {
  inquirer.prompt(getFirstQuestion(isFirst)).then((firstResponses) => {
    if (firstResponses.employeeRole !== IM_DONE) {
      inquirer.prompt(getFollowupQuestions(firstResponses.employeeRole)).then((followupResponses) => {
        // merge those 2 objects
        let responses = {
          ...firstResponses,
          ...followupResponses
        };
        answers.push(responses);
        askFirstQuestion();
      });
    } else {
      // done
      console.log(answers);
      // TODO: templates
      const compiledTemplate = handlebarsTemplate({
        answers
      });
      fs.writeFileSync('./dist/index.html', compiledTemplate);
    }
  });
  isFirst = false;
}

askFirstQuestion();

// let dummyData = [
//   {
//     employeeRole: 'Manager',
//     employeeName: 'a',
//     employeeId: 'a',
//     employeeEmail: 'a',
//     officeNumber: 'a'
//   },
//   {
//     employeeRole: 'Manager',
//     employeeName: 'a',
//     employeeId: 'a',
//     employeeEmail: 'a',
//     officeNumber: 'a'
//   },
//   {
//     employeeRole: 'Engineer',
//     employeeName: 'b',
//     employeeId: 'b',
//     employeeEmail: 'b',
//     github: 'b'
//   },
//   {
//     employeeRole: 'Manager',
//     employeeName: 'b',
//     employeeId: 'b',
//     employeeEmail: 'b',
//     officeNumber: 'b'
//   },
//   {
//     employeeRole: 'Intern',
//     employeeName: 'c',
//     employeeId: 'c',
//     employeeEmail: 'c',
//     school: 'c'
//   },
//   {
//     employeeRole: 'Intern',
//     employeeName: 'd',
//     employeeId: 'd',
//     employeeEmail: 'd',
//     school: 'd'
//   },
//   {
//     employeeRole: 'Engineer',
//     employeeName: 'd',
//     employeeId: 'd',
//     employeeEmail: 'd',
//     github: 'cefaust'
//   },
//   {
//     employeeRole: 'Intern',
//     employeeName: 'e',
//     employeeId: 'e',
//     employeeEmail: 'e',
//     school: 'e'
//   },
//   {
//     employeeRole: 'Engineer',
//     employeeName: 'f',
//     employeeId: 'f',
//     employeeEmail: 'f',
//     github: 'f'
//   }
// ];
// const compiledTemplate = handlebarsTemplate({
//   answers: dummyData
// });
// fs.writeFileSync('./dist/index.html', compiledTemplate);

