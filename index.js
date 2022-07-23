import inquirer from 'inquirer';
import {questions, addEngineer, addIntern} from './questionsList.js';
// import Manager from './lib/manager.js';
// import Engineer from './lib/engineer.js';
// import Intern from './lib/intern.js';
// import fs from 'fs';


function startQuestions() {
inquirer.prompt(questions).then((answers) => {
    if (answers.addMember === 'yes, add engineer') {
        addEngineer();
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
function addEngineer(){
    inquirer.prompt(addEngineer).then(answers => {
        const engineer = new Engineer(answers.engineer);
    })
}
startQuestions();