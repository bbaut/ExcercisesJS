Date.prototype.getNextDay = function(){
    let dateToday = this.getDate();
    let dateTomorrow = dateToday + 1;
    this.setDate(dateTomorrow);
    return this;
}

const today = new Date('August 19, 1975');

console.log(today.getNextDay());