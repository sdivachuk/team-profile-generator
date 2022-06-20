const inquirer = require('inquirer');
const Questions = require('./questions');

inquirer.prompt(questions).then((answers) => {
    console.log(answers);

})