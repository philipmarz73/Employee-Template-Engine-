const Employee = require("./Employee");
// extend employee class to create Manager class
    class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name,id,email);     
        this.officeNumber = officeNumber;
    }
    
    
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;




















// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
