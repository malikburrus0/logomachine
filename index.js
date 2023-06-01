const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        name: "shape",
        message: "What is the shape?",
        choices: [
            "triangle",
            "circle",
            "square"
        ]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What is your color of the shape?"
    },

    {
        type: "input",
        name: "shapetext",
        message: "What is your text in the shape?"
    },

    {
        type: "input",
        name: "textcolor",
        message: "What is your color of the text?"
    }
]).then(answers => {
    console.log(answers.age)
})