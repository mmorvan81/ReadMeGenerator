
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const fs = require("fs");

// TODO: Create an array of questions for user input
 
const questions = [
    inquirer.prompt ([
    {type: "input",
    name:"title",
    message: "What is the name of the project you are building?",
    },

    {type: "input",
    name:"description",
    message: "Describe the project as best as possible and what is what would the end result be?",
    },

    {type: "input",
    name:"install",
    message: "What node modules are we installing to be used for this project if any?",
    },

    {type: "input",
    name:"license",
    message: "What type of licensing are we choosing for the project?",
    choices: ["Mozilla", "Apache", "MIT", "GNU", "None"],
    },

    {type: "input",
    name:"contributers",
    message: "Are there any contributers to this project?",
    },

    {type: "input",
    name:"user_name",
    message: "What is the github user-name this project is using?",
    },

    {type: "input",
    name:"email",
    message: "What is the email address we are using to communicate on this project?",
    },
])
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const answers = generateMarkDown({questions})
     fs.writeFile(fileName, data (error))
        if (error) {return console.log(error);}
       console.log("You have created a READme File")
};
    
   async function init() {
       try{
           const responses = await inquirer.prompt (questions);
           generateMarkDown(questions, responses);
           writeToFile("README.md", generateMarkDown(data));
       } catch(err) {console.log(err)}
 };
 // TODO: Function call to initialze app

 function init(){
 }
 init();