const inquirer = require('inquirer');
const questions = require('./questionsList');
const addEngineerQuestions = require('./engineerQuestions');
const addInternQuestions = require('./internQuestions');
const Manager = require('./lib/manager'); 
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const fs = require('fs');
const HTMLGen = require('./htmlGen')

const teamArr = [];

function startQuestions() {
inquirer.prompt(questions).then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
    teamArr.push(manager);
    if (answers.addMember === 'yes, add engineer') {
        addEngineer();
    }
    else if (answers.addMember === 'yes, add intern') {
        addIntern();
    } else {
    createTeam();
    }
})

.catch(err => {
    console.log(err);
  });  
};
function addEngineer(){
    inquirer.prompt(addEngineerQuestions).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
        teamArr.push(engineer);
        if (answers.addMember === 'yes, add engineer') {
            addEngineer();
        }
        else if (answers.addMember === 'yes, add intern') {
            addIntern();
        } else {
        createTeam();
        }
    })
};

function addIntern(){
    inquirer.prompt(addInternQuestions).then(answers => {
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        teamArr.push(intern);
        if (answers.addMember === 'yes, add engineer') {
            addEngineer();
        }
        else if (answers.addMember === 'yes, add intern') {
            addIntern();
        } else {
        createTeam();
        }
    })
};

function createTeam() {
    fs.writeFileSync('./dist/index.html', HTMLGen(teamArr));
}

startQuestions();