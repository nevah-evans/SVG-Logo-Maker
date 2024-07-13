const logoShape = require('./shapes.js');
const logoText = require('./text.js');


function createLogo(data) {  
const {Circle, Square, Triangle} = logoShape;
const selectedShape = data.shape;

const circle = new Circle();
circle.colorShape(data.shapeColor);

const square = new Square();
square.colorShape(data.shapeColor);

const triangle = new Triangle();
triangle.colorShape(data.shapeColor);

const {Text} = logoText;

const text = new Text();
text.colorText(data.textColor);

if (selectedShape === 'circle') {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${circle.render()}
    
    ${text.render()}
        ${data.text}
    </text>
    
    </svg>
    `;
} else if (selectedShape === 'square'){
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${square.render()}
    
    ${text.render()}
        ${data.text}
    </text>
    
    </svg>
    `;
} else {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${triangle.render()}

    ${text.render()}
    ${data.text}
</text>

</svg>
`;
}
}


module.exports = createLogo;
