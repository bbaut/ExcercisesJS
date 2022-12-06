let todayDate = new Date ();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function modifyDate (date){
    date.setDate(getRandomInt(10));
    return date;
}

console.log(modifyDate(todayDate))