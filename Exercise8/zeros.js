function zeros (arrayUnordered){
    let arrayU = arrayUnordered;
    let arrayUSize = arrayU.length;
    for(let i=0; i<arrayUSize;i++){
        if(arrayU[i]==0){
            let index = arrayU.indexOf(arrayU[i]);
            for(let j=index; j<arrayUSize; j++){
                arrayU[j] = arrayU[j+1];
            }
            arrayU[arrayUSize-1] = 0;
        }
    }
    return arrayU;
}

let array = [2,0,4,5,0,2,0,0,3];

console.log(zeros(array));