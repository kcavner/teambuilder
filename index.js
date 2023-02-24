const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const inquirer = require('inquirer')
const fs = require('fs')
const html = './dist/index.html'



inquirer.prompt([
{
    type:'input',
    message:`Enter manager's name.`,
    name:'managerName',
    validate: validateInput
},
{
    type:'input',
    message:`Enter employee ID.`,
    name:'employeeID',
    validate: validateInput
},
{
    type:'input',
    message:`Enter email address.`,
    name:'email',
    validate: validateInput
},
{
    type:'input',
    message:`Enter office number`,
    name:'office',
    validate: validateInput
}
]).then((answers)=>{
    const {managerName,employeeID,email,office} = answers
    const newManager = new Manager(managerName,employeeID,email,office)
    newCard(newManager)
    choicePrompt()
})

function newCard(classObject){

    const classArray = Object.entries(classObject);
  
    const htmlFile = fs.readFileSync(html, 'utf-8');

    var updatedHtml = htmlFile.replace(
      '<div id="card-container">',
      `<div id="card-container">
        <div class="new-card"><div class="title">${classObject.getRole()}</div>
          ${classArray.map(([key, value]) => `<div class="${key}">${key}: ${value}</div>`).join('')}
        </div>
      `
    );
   

    fs.writeFileSync(html, updatedHtml, 'utf-8');
  }

function choicePrompt(){
    inquirer.prompt([
        {
            type:'list',
            message:`Would you like to add engineers or interns?`,
            choices:['engineer','intern','exit'],
            name:'employeeChoice',
            validate: validateInput
        },
        ]).then((choiceAnswers)=>{
            if(choiceAnswers.employeeChoice === 'engineer'){
                engineerPrompt()
                }
            if(choiceAnswers.employeeChoice === 'intern'){
                internPrompt()
                }
            if(choiceAnswers.employeeChoice === 'exit'){
                return 
                }    
        })
}

function engineerPrompt(){
    inquirer.prompt([
        {
            type:'input',
            message:`Enter engineer's name.`,
            name:'engineerName',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter employee ID.`,
            name:'employeeID',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter email address.`,
            name:'email',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter github username`,
            name:'github',
            validate: validateInput
        }
    ]).then((engineerAnswers)=>{

        const {engineerName,employeeID,email,github} = engineerAnswers
        const newEngineer = new Engineer(engineerName,employeeID,email,github)
        newCard(newEngineer)
        choicePrompt()
    })
}

function internPrompt(){
    inquirer.prompt([
        {
            type:'input',
            message:`Enter intern's name.`,
            name:'internName',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter employee ID.`,
            name:'employeeID',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter email address.`,
            name:'email',
            validate: validateInput
        },
        {
            type:'input',
            message:`Enter intern's school`,
            name:'school',
            validate: validateInput
        }
    ]).then((internAnswers)=>{

        const {internName,employeeID,email,school} = internAnswers
        const newIntern = new Intern(internName,employeeID,email,school)
        newCard(newIntern)
        choicePrompt()
    })
}

// modular function to validate input as the value to the validate propterties in the inquirer prompt
function validateInput(input){
    if (input.trim() === '') {
        return 'You must enter something.';
        }
        return true;
     
 }