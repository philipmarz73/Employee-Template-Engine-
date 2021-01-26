const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
const employeeInfo = [];
function chooseEmployeeType() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Choose which employee type to add.',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Manager', 'Build'],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.choice) {
        case "Engineer": 
            addEngineer();
          break;
        case "Intern":
            addIntern();
          break;
        case "Manager":
            addManager();
          break;

        default:
        buildTeam ();  
        
      }
    });            
}
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'checkbox',
//       message: 'What languages do you know?',
//       name: 'stack',
//       choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
//     },
//     {
//       type: 'list',
//       message: 'What is your preferred method of communication?',
//       name: 'contact',
//       choices: ['email', 'phone', 'telekinesis'],
//     },
//   ])
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });
