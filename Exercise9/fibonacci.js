function fibonacci (numberMember){

    memoization = memoization || [];

    console.log(memoization[8])

    let f0 = 0;
    let f1 = 1;
    let fx;

    if (memoization[numberMember]) return memoization[numberMember];

    if(numberMember == 0){
        memoization[0] = f0;
        return f0;
    }
    else if (numberMember == 1){
        memoization[1] = f1;
        return f1;
    }
    else {
        fx = fibonacci(numberMember-2) + fibonacci(numberMember-1);
        memoization[numberMember] = fx;
        return memoization[numberMember];
    }

}

console.log(fibonacci(10))
