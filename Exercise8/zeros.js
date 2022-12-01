function zeros (arrayUnordered){
    for(let i=0; i<arrayUnordered.length;i++){
        if(arrayUnordered[i]==0){
            let index = arrayUnordered.indexOf(arrayUnordered[i]);
            for(let j=index; j<arrayUnordered.length; j++){
                arrayUnordered[j] = arrayUnordered[j+1];
            }
            arrayUnordered[arrayUnordered.length-1] = 0;
        }
    }
    return arrayUnordered;
}

let array = [2,0,4,5,0,2,0,0,3];

console.log(zeros(array));