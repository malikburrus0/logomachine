const inquire = require('inquirer');
const fs = require('fs');
const SVG = require('./svg.js');
const {Circle, Triangle, Square} = require('./shape.js');
const {writeFile} = require('fs/promises');

class CLI {
    constructor() {
        this.questions = [
            {
                type: 'list',
                name: 'shape',
                message: 'What shape would you like to draw?',
                choices: ['triangle', 'square', 'circle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'What color should the shape be?'
            },
            {
                type: 'input',
                name: 'text',
                message: 'What text should be inside the shape?'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'What color should the text be?'
            }
        ];
    }

    run() {
        inquire.prompt(this.questions)
            .then(answers => {
                let shape;
                switch (answers.shape) {
                    case "circle":
                        shape = new Circle();
                        break;
            
                      case "square":
                        shape = new Square();
                        break;
            
                      default:
                        shape = new Triangle();
                        break;
            

                }
                shape.setColor(answers.shapeColor);
                const svg = new SVG();
                svg.setShape(shape);

                svg.setText(answers.text, answers.textColor);
                

                return writeFile('output.svg', svg.render());
                // const svgData = svg(answers);
                // fs.writeFile('output.svg', svgData, (err) => {
                //     if (err) throw err;
                //     console.log('The file has been saved!');
                // });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = CLI;