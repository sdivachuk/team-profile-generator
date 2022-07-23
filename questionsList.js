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

const addEngineer = [
    {
        type: 'input',
        message: 'What is engineers name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is engineers ID?',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'What is engineers email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is engineers GitHub username?',
        name: 'engineerGitHub',
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

const addIntern = [
    {
        type: 'input',
        message: 'What is interns name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is interns ID?',
        name: 'internID',
    },
    {
        type: 'input',
        message: 'What is interns email?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What is interns school?',
        name: 'internSchool',
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

export {questions, addEngineer, addIntern}
