class Action{
    name;
    constructor(name) {
        this.name = name;
    }
    static isOddNumber(number){
        if(number%2 == 1) 
        
        console.log("an odd number"); 

        else console.log("an even number");
    }
}

const action1 = new Action("number is odd or is even??")

console.log(action1.name);

Action.isOddNumber(24)
