let button = document.getElementById("btnSubmit");
let message = document.getElementById("message");

let firstRow = ["1","2","3","4","5","6","7","8","9","0"];
let secondRow = ["q","w","e","r","t","y","u","i","o","p"];
let thirdRow = ["a","s","d","f","g","h","j","k","l","ñ"];
let fourthRow = ["z","x","c","v","b","n","m",",",".","_"];

button.addEventListener("click", () => {
    let input = document.getElementById("inputText").value;
    let flagCounter = 0, flagRow = 0, flagParent = 0;
    let messageCool = "Good text!";

    inputSize = input.length;

    if (inputSize >= 4) {

        inputArray = input.split("");

        if (firstRow.includes(inputArray[0])){
            flagRow = 1;
            flagCounter = 1;
            flagParent = firstRow.indexOf(inputArray[0]);
        }
        else if (secondRow.includes(inputArray[0])){
            flagRow = 2;
            flagCounter = 1;
            flagParent = secondRow.indexOf(inputArray[0]);
        }
        else if (thirdRow.includes(inputArray[0])){
            flagRow = 3;
            flagCounter = 1;
            flagParent = thirdRow.indexOf(inputArray[0]);
            console.log(flagParent)
        }
        else if (fourthRow.includes(inputArray[0])){
            flagRow = 4;
            flagCounter = 1;
            flagParent = fourthRow.indexOf(inputArray[0]);
        }

        for (let i = 1; i< inputSize; i++){
            if(firstRow.includes(inputArray[i])){
                if ((flagRow == 1) && (flagParent <= firstRow.indexOf(inputArray[i]))){
                    flagCounter = flagCounter + 1;
                }
                else {
                    flagCounter = 1;
                }
                flagRow = 1;
                flagParent = firstRow.indexOf(inputArray[i]);
            }
            else if (secondRow.includes(inputArray[i])){
                if ((flagRow == 2) && (flagParent <= secondRow.indexOf(inputArray[i]))){
                    flagCounter = flagCounter + 1;
                }
                else {
                    flagCounter = 1;
                }
                flagRow = 2;
                flagParent = secondRow.indexOf(inputArray[i]);
            }
            else if (thirdRow.includes(inputArray[i])){
                if ((flagRow == 3) && (flagParent+1 == thirdRow.indexOf(inputArray[i]))){
                    flagCounter = flagCounter + 1;
                }
                else {
                    flagCounter = 1;
                }
                flagRow = 3;
                flagParent = thirdRow.indexOf(inputArray[i]);
            }
            else if (fourthRow.includes(inputArray[i])){
                if ((flagRow == 4) && (flagParent <= fourthRow.indexOf(inputArray[i]))){
                    flagCounter = flagCounter + 1;
                }
                else {
                    flagCounter = 1;
                }
                flagRow = 4;
                flagParent = fourthRow.indexOf(inputArray[i]);
            }
            if (flagCounter == 4){
                alert ("Invalid text");
            }
        }
    }
    message.insertAdjacentText('afterbegin',`${messageCool}`);
})