
//Number 1 Soda Machine
function sodaMachine(items){
    let previousLowest = Number.MAX_SAFE_INTEGER;
    let minItem = 0;
    
    for(let i in items){
        if (items[i] < previousLowest){
            previousLowest = items[i];
            minItem = i;
        }
    }

    return minItem;
}

console.log("Output: " + sodaMachine({ pepsi: 10, coke: 5, sprite: 4, redbull: 9 }));

//Number 2 

function sumEvenOdd(num){
    let numCombine = 0;
    let numArray = Array.from(String(num),Number);

    for(let i = 0; i < numArray; i++){
        console.log("it worked at all");
        numCombine = numCombine + numArray[i];
        console.log(numArray[i]);
    }

    if(numCombine % 2 == 0){
        return "The sum of the digits for " + num + " is even"
    }
    else{
        return "The sum of the digits for " + num + " is odd"
    }

}

console.log(sumEvenOdd(11));
console.log(sumEvenOdd(11));