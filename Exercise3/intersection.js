function intersection (array1, array2){

    const arrayMin = array1.length <= array2.length ? array1 : array2;
    const arrayMax = array1.length <= array2.length ? array2 : array1;

    let arrayIntersection = arrayMin.filter(element => arrayMax.includes(element));

    return arrayIntersection
}

arrayOne = [2,3,5,3];
arrayTwo = [3,4,3,5,3,6,8];

console.log(intersection(arrayOne,arrayTwo))