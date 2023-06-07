const {circle, square, triangle } = require("./shape.js");

class SVG {
    constructor(){
        this.textElement = "";
        this.shapeElement = "";        
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shapeElement}${this.textElement}    
      </svg>`
    }
    setText(message, color){
        this.textElement =`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`

    }

    setShape(shape){
        this.shapeElement = shape.render();
    }
}

module.exports = SVG;

// function generateSVG(data) {
//     const shape = data.shape;
//     const shapeColor = data.shapeColor;
//     const text = data.text;
//     const textColor = data.textColor;
//     let svg = "";
//     switch (shape) {
//         case "circle":
//             svg = circle(shapeColor, text, textColor);
//             break;
//         case "square":
//             svg = square(shapeColor, text, textColor);
//             break;
//         case "triangle":
//             svg = triangle(shapeColor, text, textColor);
//             break;
//     }
//     return svg;
// }

