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


// Given two strings, determine if one is a permutation of the other
function arePermutations(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    var stringArray1 = string1.split('');
    var stringArray2 = string2.split('');
    stringArray1.sort();
    stringArray2.sort();
    for(var i = 0; i < stringArray1.length; i++) {
        if (stringArray1[i] !== stringArray2[i]) {
            return false;
        }
    }
    return true;
}

function replaceSpaces(string) {
    var stringArray = string.split('');
    var newStringArray = stringArray.reduce(function(acc, val){
        if(val.charCodeAt(0) === 32) {
            acc.push('%20');
        } else {
            acc.push(val);
        }
        return acc;
    },[]);
    return newStringArray.join('');
}

module.exports = {
    containsUniqueCharacters: containsUniqueCharacters,
    containsUniqueCharactersImproved: containsUniqueCharactersImproved,
    reverse: reverse,
    reverse2: reverse2,
    arePermutations: arePermutations,
    replaceSpaces: replaceSpaces
};