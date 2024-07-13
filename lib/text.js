class Text {
    constructor() {
        this.color = '';
    }

    colorText(color){
        this.color = color;
    }

    render(){
        return ` <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">`
    }
   
}


module.exports = {Text};