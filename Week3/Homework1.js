
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

console.log('Output: ' + sodaMachine({ pepsi: 10, coke: 5, sprite: 4, redbull: 9 }));

//Number 2 

function sumEvenOdd(num){
    let numCombine = 0;
    let numArray = Array.from(String(num),Number);

    for(let i = 0; i < numArray.length; i++){
        numCombine = numCombine + numArray[i];
        //console.log(numCombine);
    }

    if(numCombine % 2 === 0){
        return 'The sum of the digits for ' + num + ' is even';
    }
    else{
        return 'The sum of the digits for ' + num + ' is odd';
    }

}

console.log(sumEvenOdd(11));
console.log(sumEvenOdd(12345));


//Number 3

function countNestedWord(longString,subString) {
    let currentCount = 0;

    let caseFixString = longString.toUpperCase();
    let caseFixSub = subString.toUpperCase();

    for (let i = 0; i < caseFixString.length; i++){
        if (caseFixString.substr(i, caseFixSub.length) === caseFixSub) {
            currentCount++;
        }
    }

    return 'output: ' + currentCount;
}

console.log(countNestedWord('nodejavascriptnodevscodejsnodejavascriptvscodenopenonenode', 'node'));

console.log(countNestedWord('There are many differences between Java and JavaScript','java'));

//Number 4

function cleanPhrase(input){
    let cleanedInput = ''; 
    for(let i = 0; i < input.length; i++){
        if ((isNaN(input[i]))){
            cleanedInput += input[i];
        }
    }
    return cleanedInput;
}

console.log(cleanPhrase('Th7e qu1ick br8own fo0x jum1ps over 22the la9zy d3og5.'));

//Number 5

function reverseAtWord(inputArray,inputWord){
    let current = inputArray.indexOf(inputWord);
    if(current === -1) return inputArray;
    return inputArray.slice(0, current).concat(inputArray.slice(current).reverse());
}

console.log(reverseAtWord(['alpha', 'beta', 'gamma', 'delta', 'epsilon'], 'gamma'));

//Number 6
function ascendingArray(ascend){
    
    let originalLength = ascend.length;
    let currentSmallestPos;
    let sortedAscend = [];

    for(let i = 0; i < originalLength; i++){
        let currentSmallest = Number.MAX_SAFE_INTEGER;
        for(let j = 0; j < ascend.length; j++){
            if(ascend[j].length <= currentSmallest){
                currentSmallest = ascend[j].length;
                currentSmallestPos = j;
            }
        }
        sortedAscend.push(ascend[currentSmallestPos]);
        ascend.splice(currentSmallestPos,1);
    }

    return sortedAscend;
}

console.log(ascendingArray(['march', 'may', 'august', 'june']));


//Number 7

function letterMap(letterArray){
    let map = {};
    let sortedLetterArray = letterArray.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    sortedLetterArray.forEach(function(character){
        map[character.toLowerCase()] = character.toUpperCase();
    });
    return map;
}

console.log(letterMap(['Z', 'a', 'b', 'y', 'x', 'c']));