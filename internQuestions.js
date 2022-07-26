const addInternQuestions = [
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

module.exports = addInternQuestions;