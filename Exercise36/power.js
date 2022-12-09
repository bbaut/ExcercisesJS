function myPowerFn(number){
    let numberToPower = number;
    let numberPowered = 1;
    return function (power){
        for (let i = 0; i<power; i++){
            numberPowered = numberPowered*numberToPower;
        }
        return  numberPowered;
    }
}

var n = myPowerFn(3);
console.log(n(2));