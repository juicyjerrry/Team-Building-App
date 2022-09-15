const inquirer = require(`inquirer`);
const jest = require(`jest`)

const Manager = require(`./Lib/Manager`);
const Engineer = require(`./Lib/Engineer`);
const Intern = require(`./Lib/Intern`);

const teamMembers = [];

function menu() {
    return inquirer.prompt(
        [
            {
                type: `list`,
                message: `Would you like to add another or finish?`,
                choices: [`Add an Engineer`, `Add an Intern`, `Finish Team`],
                name: `exitChoice`
            },
        ])
        .then(({
            exitChoice,
        }) => {
            switch (exitChoice){
                case `Add an Engineer`:
                    addEngineer();
                    break;
                case `Add an Intern`:
                    addIntern();
                    break;
                case `Finish Team`:
                    createHTML();
            }
        } )
}

return inquirer.prompt(
    [
        {
            type: `input`,
            message: `What is the name of your Manager?`,
            name: `managerName`
        },
        {
            type: `input`,
            message: `What is the ID of your manager`,
            name: `managerID`
        },
        {
            type: `input`,
            message: `What is the email for your manager?`,
            name: `managerEmail`
        },
        {
            type: `input`,
            message: `What is the Office Number of your Manager?`,
            name: `officeNumber`
        },
    ])
    .then( ({
        managerName,
        managerID,
        managerEmail,
        officeNumber,
        }) => {
        console.log(`${managerName} has been created`);
        const manager = new Manager(managerName, managerID, managerEmail, officeNumber);
        teamMembers.push(manager);
        menu();
    }
    );

function addEngineer() {
    return inquirer.prompt(
        [
            {
                type: `input`,
                message: `enter the name of your Engineer`,
                name: `engineerName`
            },
            {
                type: `input`,
                message: `enter your github username`,
                name: `github`
            },
            {
                type: `input`,
                message: `enter your ID`,
                name: `engineerID`
            },
            {
                type: `input`,
                message: `enter your Email`,
                name: `engineerEmail`
            },
        ])
        .then(({
            engineerName,
            github,
            engineerID,
            engineerEmail,
            }) => {
                console.log(`${engineerName} has been created!`)
                const engineer = new Engineer(engineerName, github, engineerID, engineerEmail);
                teamMembers.push(engineer);
            menu();
        })
};

function addIntern() {
    inquirer.prompt(
        [
            {       
                type: `input`,
                message: `enter the name of your Intern`,
                name: `internName`
            },
            {
                type: `input`,
                message: `enter your intern's school`,
                name: `school`
            },
            {
                type: `input`,
                message: `enter your intern's ID`,
                name: `internID`
            },
            {
                type: `input`,
                message: `enter your intern's Email`,
                name: `internEmail`
            },
        ])
        .then(({
            internName,
            school,
            internID,
            internEmail,
            }) => {
                console.log(`${internName} has been created!`)
                const intern = new Intern(internName, school, internID, internEmail);
                teamMembers.push(intern);
            menu();
        })
};

function createHTML() {
    console.log(`Team has been assembled`)
};