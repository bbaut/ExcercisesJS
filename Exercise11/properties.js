function properties (obj1, obj2){
    if (_.isEqual(obj1,obj2)) {
        return "No properties to show";
    }
    else {
        let arrayProperties = [];
        let obj1KeysArray = Object.keys(obj1), 
            obj1ValuesArray = Object.values(obj1),
            obj2ValuesArray = Object.values(obj2);
        let objSize = Object.keys(obj1).length;
        for(let i=0 ; i<objSize; i++){
            if (obj1ValuesArray[i] != obj2ValuesArray[i]){
                arrayProperties.push(obj1KeysArray[i]);
            }
            return arrayProperties;
        }
    }
}

let obj1 = {
    name: 'Mar',
    lastName: 'Smith',
    city: 'New York'
}

let obj2 = {
    name: 'Yess',
    lastName: 'Smith',
    city: 'New York'
}

console.log(properties (obj1, obj2));