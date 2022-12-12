/*
Here I'm creatig a class called Employee which will help me to simulate the creation 
of new employees, also the authentication in order to login, and the recovery of its password. 
This could help to create a data base of the members of a company.
With this class I will be able to create different instances depending on the users of the
company.
*/

class Employee {
    name; //This is the name of the employee
    email; //This is the email of the employee
    #password; //This will be the password of the employee, it is a private variable.
    constructor() {}
  
    /*Here I create a private method that will validate the email typed by the employee.
    Here I prevent that the employee that is going to be created is part of the company. So 
    I validate it with the email given by the compay. This is doing with the help
    of regex
    */

    #validateEmail(email) {

        let validationEmailRegex =  /[a-zA-z_\$\.]+[a-zA-z_\$0-9\.]*@intekglobal\.(com){1}/;
        
        if (email.match(validationEmailRegex)){
            return true;
        }
        else {
            return false;
        }
    }

    /* 
    Also I must ask for a strong password. Also this is done with the help of regex and a 
    private method to check for that. 
    */
  
    #validatePassword(password) {
        let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if (password.match(strongPasswordRegex)){
            return true;
        }
        else {
            return false;
        }
    }
  
    /* 
    Here, I create a method that will help me to create the new employee. The method asks for the 
    name, the email, and a password. 
    */

    signUp(name, email, password) {

        //Here I validate the data introduced by the employee, with the help of the conditional.
  
        if (this.#validateEmail(email) && this.#validatePassword(password)) {
            //If everything is ok, we assign the data given by the employee, to the variables
            this.name = name;
            this.email = email;
            this.#password = password;
            console.log('User registered successfuly');
        } else {
            throw new Error ('Please enter correct Details!!'); 
        }
    }
  
    /* 
    The I create a method to login the data base. This method requires the email and the password from 
    each employee.
    */

    login(email, password) {
        /*
        Here we must validate that the information in order to login, given by the employee, is the correct one.
        So, we need to compare it. 
        */
        if (email === this.email){
            if (password === this.#password){
                console.log('Login Successfully');
            }
            else if(password !== this.#password){
                throw new Error ("Check your password")
            }
        }
        else {
            throw new Error ("The email is incorrect")
        }
    }

    /*
    Here I implement a method if the employee wants to recover its password. 
    In order to do that, he must verify its email and its past password.
    */
  
    recoverPassword(email, password, newPassword) {
        
        if (email === this.email){
            if (password === this.#password){
                if (this.#validatePassword(newPassword)) {
                    this.#password = newPassword;
                    console.log('The password has been changed successfully ');
                }
                else {
                    throw new Error ('Please enter a valid password');
                }
            }
            else if(password !== this.#password){
                throw new Error ("Check your password");
            }
        }
        else {
            throw new Error ("The email is incorrect");
        }
    }
};

//Here I create a new instance of the class Employee, for a new employee called James. 

const james = new Employee();

james.signUp('James Kirk', 'jameskirk@intekglobal.com', 'asdfA2#eas');
  
james.login('jameskirk@intekglobal.com', 'asdfA2#eas');
james.recoverPassword('jameskirk@intekglobal.com', 'asdfA2#eas', 'asgsgfdsg');