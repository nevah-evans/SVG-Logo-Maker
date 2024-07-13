const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {
    test('the fill color should match the input used in colorShape() method', ()=>{
        const circle = new Circle();
        circle.colorShape("green");
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

describe('Square', () => {
    test('the fill color should match the input used in colorShape() method', () => {
        const square = new Square();
        square.colorShape("blue");
        expect(square.render()).toEqual('<rect width="130" height="130" x="85" y="40" fill="blue" />');
    });
});

describe('Triangle', () => {
    test('the fill color should match the input used in colorShape() method', ()=>{
        const triangle = new Triangle();
        triangle.colorShape("red");
        expect(triangle.render()).toEqual('<polyline points="150,10 242,140 56,140" fill="red" />')
    });
});
