function flat(arrayToFlat) {

    let arrayFlatted = [];

    function procedure(array) {
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] == "object") {
                procedure(array[i]);
            }
            else {
                arrayFlatted.push(array[i]);
            }
        }
    }

    procedure(arrayToFlat);

    return arrayFlatted;
}

arrayNested = [1, 2, 3, [4, 5, [6, 7]], 8, 9];

console.log(flat(arrayNested));