function stringPattern (stringPattern, stringToProve) {
    let arrayStringP = stringPattern.split(""), arrayStringTPr = stringToProve.split("");
    let stringPSize = arrayStringP.length, stringTPrSize = arrayStringTPr.length;

    let arrayStringPChar = arrayStringP.map(function(x){
        return x.charCodeAt();
    })

    let arrayStringTPrChar = arrayStringTPr.map(function(x){
        return x.charCodeAt();
    })

    //48 - 57 are numbers
    //65 - 90 are uppercase letters
    //97 - 122 are lower uppercase
    //42 = *

    if(stringTPrSize == stringPSize + 1){ //Here, as * is a single-wildcard, we are letting the word to only pass the pattern length by one if it has a *
        arrayStringTPrChar.forEach(element => {
            if (element != 42){
                return "They do not match"
            }
        });
    }
    else {
        if (stringPSize === stringTPrSize){
            for (let i = 0; i<stringPSize; i++){
                first: if(arrayStringPChar[i]>= 48 && arrayStringPChar[i]<= 57){ //Here we are checking if they are numbers
                    if(arrayStringTPrChar[i]>= 48 && arrayStringTPrChar[i]<= 57){
                        break first
                    }
                    else if (arrayStringTPrChar[i] != 42) {
                        return "They do not match"
                    }
                }
                else second: if (arrayStringPChar[i]>= 65 && arrayStringPChar[i]<= 90){ //Here we are checking if they are uppercase
                        if(arrayStringTPrChar[i]>= 65 && arrayStringTPrChar[i]<= 90){
                            break second
                        }
                        else if (arrayStringTPrChar[i] != 42) {
                            return "They do not match"
                        }
                }
                else third: if (arrayStringPChar[i]>= 97 && arrayStringPChar[i]<= 122){ //Here we are checking if they are lowercase
                    if(arrayStringTPrChar[i]>= 97 && arrayStringTPrChar[i]<= 122){
                        break third
                    }
                    else if (arrayStringTPrChar[i] != 42) {
                        return "They do not match"
                    }
                }
            }
        }
        else { //If the length of the word is different from the length of the pattern or the length plus one, only
            return "They do not match"
        }
    }
    
    return "They match"
}

//We can choose another word. The match only concerns about the size and the uppercase and lowercase. 
//If we want explicitly to be with the same letters, we must change the algorithm and 
//I think the algorithm would be much easier. 
//I decided to consider a more general context. 

let wordPattern = "America";
let wordToProve = "America*"

console.log(stringPattern(wordPattern,wordToProve));