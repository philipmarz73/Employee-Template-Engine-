const Employee = require("./Employee");
// modify employee parent class for engineer class
class Engineer extends Employee{
    constructor (name,id,email,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer;