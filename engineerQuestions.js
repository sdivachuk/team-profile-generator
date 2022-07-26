const addEngineerQuestions = [
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

module.exports = addEngineerQuestions;