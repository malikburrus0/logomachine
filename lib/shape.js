class Shape {
    constructor() {
        this.color = '';    
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  



















// var fs = require('fs');
// var inquirer = require('inquirer');
// var prompt = require('prompt');
// var colors = require('colors');

// var shape = {
//     type: "",
//     color: "",
//     text: "",
//     textcolor: ""
// };

// var shapeArray = [];

// function Shape(type, color, text, textcolor) {
//     this.type = type;
//     this.color = color;
//     this.text = text;
//     this.textcolor = textcolor;
// }


// function createShape(shape, color, text, textcolor) {
//     var newShape = new Shape(shape, color, text, textcolor);
//     shapeArray.push(newShape);
//     console.log(shapeArray);
//     return newShape;
// }