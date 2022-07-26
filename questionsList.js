const questions = [
    {
        type: 'input',
        message: 'What is the team managers name? ',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is team managers employee ID?',
        name: 'managerID',
    },
    {
        type: 'input',
        message: 'What is managers email?',
        name: 'managerEmail',
    },
    {
        type: 'number',
        message: 'What is managers office number',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add another team member?',
        name: 'addMember',
        choices: [
            'yes, add engineer',
            'yes, add intern',
            'no, I am finished adding team members'
        ],
    },
]


module.exports = questions;
