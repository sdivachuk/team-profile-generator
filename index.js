const inquirer = require('inquirer');
const questions = require('./questionsList.js');

inquirer.prompt(questions).then((answers) => {
    console.log(answers);

})