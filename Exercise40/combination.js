function sumToZero(arrayWithNegativeNumbers) {
    
    let arrayNum = arrayWithNegativeNumbers;
    let negativeNum = [], positiveNum = [], arrayResult = []; 
    let ceroNum = 1;

    arrayNum.forEach(element => {
        if(element > 0){
            positiveNum.push(element);
        }
        else if (element < 0) {
            negativeNum.push(element);
        }
        else {
            ceroNum = 0;
        }
    });

    let negativeNumLength = negativeNum.length;
    let positiveNumLength = positiveNum.length;

    for(let i = 0 ; i < positiveNumLength; i ++){
        for(let j = i+1; j < positiveNumLength; j++){
            for(let k = 0; k < negativeNumLength; k ++){
                if(positiveNum[i] + positiveNum[j] + negativeNum [k] == 0){
                    arrayResult.push([positiveNum[i], positiveNum[j], negativeNum[k]]);
                }
            }
        }
    }

    for(let i = 0 ; i < negativeNumLength; i ++){
        for(let j = i+1; j < negativeNumLength; j++){
            for(let k = 0; k < positiveNumLength; k ++){
                if(negativeNum[i] + negativeNum[j] + positiveNum [k] == 0){
                    arrayResult.push([negativeNum[i], negativeNum[j], positiveNum[k]]);
                }
            }
        }
    }

    if (ceroNum == 0){
        for(let i = 0; i < positiveNumLength; i ++){
            for(let j = 0 ; j < negativeNumLength; j ++){
                if (positiveNum[i]+ negativeNum[j] + ceroNum == 0){
                    arrayResult.push([positiveNum[i], negativeNum[j], ceroNum]);
                }
            }
        }
    }

    let arrayCombination = [...new Set(arrayResult.map(element => JSON.stringify(element)))];
    return arrayCombination;
}

let arrayNegatives = [3,2,1,0,-3,2,2,-2];

console.log(sumToZero(arrayNegatives));