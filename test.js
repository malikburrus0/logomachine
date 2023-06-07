const { expect } = require('chai');
const { createShape } = require('./shape.js');

describe('createShape', () => {
    it('should return a shape object', () => {
        const shape = createShape('triangle', 'red', 'hello', 'white');
        expect(shape).to.be.an('object');
        expect(shape).to.have.all.keys('type', 'color', 'text', 'textcolor');
    });
});