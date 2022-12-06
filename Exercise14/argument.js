function check (...args){
    let flag = 0;
    args.forEach(element => {
        if (element == 2){
            flag = 1;
        }
    });
    if (flag ==1){
        return "2 is an argument";
    }
    else {
        return "2 is not an argument";
    }
}

console.log(check(1,2,3,4))