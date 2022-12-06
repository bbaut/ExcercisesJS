const info = document.querySelectorAll(".info")[1];
const firstDiv = info.getElementsByTagName('div')[0];
const secondDiv = info.getElementsByTagName('div')[1];

let candidate = {
    name:{
        firstname : 'John',
        lastname : 'Galt',
        phone: '123-456-7890' 
    },

    printName (){
        return `${this.name.firstname} ${this.name.lastname}`;
    }
}

firstDiv.insertAdjacentHTML("afterbegin", JSON.stringify(candidate.name.firstname));
secondDiv.insertAdjacentHTML("afterbegin", JSON.stringify(candidate.printName()));