// implement an algorithm to determine if a sring has all unique charaters
function containsUniqueCharacters(stringToCheck) {
    var stringArray = stringToCheck.split('');
    var uniqueArray = [];
    var isUnique = true;
    var i = 0;
    while(isUnique && i < stringArray.length){
        if (uniqueArray.indexOf(stringArray[i]) !== -1) {
            isUnique = false;
        }
        else {
            uniqueArray.push(stringArray[i]);
        }
        i++;
    }
    return isUnique;
}

function containsUniqueCharactersImproved(stringToCheck) {
    if (stringToCheck.length > 256) {
        return false;
    }
    var characterCheck = new Array(256);
    for (var i = 0; i < stringToCheck.length; i++) {
        var charCode = stringToCheck.charCodeAt(i);
        if (characterCheck[charCode]) {
            return false;
        }
        characterCheck[charCode] = true;
    }
    return true;
}


// Implement a function to reverse a string
function reverse(stringToReverse) {
    var stringArray = stringToReverse.split('');
    var reversed = stringArray.reduce(function(acc, val) {
        acc = val + acc;
        return acc;
    });
    return reversed;
}

function reverse2(stringToReverse) {
    var stringArray = stringToReverse.split('');
    var n = stringToReverse.length;
    for(var i = 0; i < n/2; i++) {
        var temp = stringArray[i];
        stringArray[i] = stringArray[n-1-i];
        stringArray[n-1-i] = temp;
    } 
    return stringArray.join('');
}
module.exports = {
    containsUniqueCharacters: containsUniqueCharacters,
    containsUniqueCharactersImproved: containsUniqueCharactersImproved,
    reverse: reverse,
    reverse2: reverse2
};