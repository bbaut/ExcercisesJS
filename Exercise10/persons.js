class Person {
    constructor(name, lastName) {
      this.name = name;
      this.lastName = lastName;
    }

    // Getter
    get fullName() {
        return this.createFullName();
    }
    // Method
    createFullName() {
        return `${this.name} ${this.lastName}`;
    }

    ajaxRequest(url){
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
    }

}

class Medical extends Person {
    constructor(name, lastName, speciality) {
      super(name);
      super(lastName);
      this.speciality = speciality;
    }

}

//Here I supposed I have a file called data.txt
const urlAjaxRequest = './data.txt'

Person1 = new Person("John", "Carrie");

console.log(Person1.fullName);
Person1.ajaxRequest(urlAjaxRequest);