const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const { join } = require('path');
const createLogo = require('./logo.js');

class CLI{
constructor(){
    this.logo = '';

    this.logo = [];
}
run (){
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (Must be only 3 characters)'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape:'
        },
    ])
    .then((data) =>{
      return writeFile(
        join(__dirname, '..', 'output', 'Logo.svg' ),
        createLogo(data)
    )
    .then(()=> {
        console.log('Logo generated!');
    })
    })
    .catch((err)=>{
        console.log(err);
        console.log('Oops. Something went wrong!')
    });
}
}

module.exports = CLI;