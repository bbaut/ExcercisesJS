Array.prototype.duplicate = function (){
    let array = this;
    arrayDuplicated = array.concat(array);
    return arrayDuplicated;
}

const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

function monthsPlusOne(stringMonths){
    let arrayMonths = stringMonths.split(" ");
    let monthsNum = arrayMonths.length/2;
    let arrayMonthsPlusOne = arrayMonths.slice(0,monthsNum);

    arrayMonthsPlusOne.splice(monthsNum,0,months[monthsNum]);
    return arrayMonthsPlusOne.duplicate().join(" ");

}

let monthsString = "January February March January February March";

console.log(monthsPlusOne(monthsString));