class Shapes {
    constructor() {
        this.color = '';
    }

       colorShape(color) {
        this.color = color;
       }
}

class Circle extends Shapes {
   
    render() {
       return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shapes {

    render() {
        return `<rect width="130" height="130" x="85" y="40" fill="${this.color}" />`;
        }
}

class Triangle extends Shapes {
 
    render () {
      return `<polyline points="150,10 242,140 56,140" fill="${this.color}" />`;
    }
}


module.exports = { Circle, Square, Triangle }
