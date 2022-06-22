const inquirer = require('inquirer');
const questions = require('./questionsList.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const fs = require('fs');


function startQuestions() {
inquirer.prompt(questions).then((answers) => {
    if (answers.addMember === 'yes, add engineer') {
        inquirer.prompt(addEngineer).then(answers)
    }
    else if (answers.addMember === 'yes, add intern') {
        inquirer.prompt(addIntern).then(answers)
    } else {
    console.log(answers);
    }
})

.catch(err => {
    console.log(err);
  });  
};

startQuestions();