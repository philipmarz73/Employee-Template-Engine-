const Employee = require("./Employee");
// modify employee class to create intern class, with school affiliation
    class Intern extends Employee{
    constructor (name, id, email, school){
        super(name,id,email);
        this.school =school;
    }
     
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;

//  This class should inherit from Employee.
