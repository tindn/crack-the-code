// implement an algorithm to determine if a sring has all unique charaters
function containsUniqueCharacters(stringToCheck) {
    var stringArray = stringToCheck.split('');
    var uniqueArray = [];
    var isUnique = true;
    var i = 0;
    while(isUnique && i < stringArray.length){
        if (uniqueArray.includes(stringArray[i])) {
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

module.exports = {
    containsUniqueCharacters: containsUniqueCharacters,
    containsUniqueCharactersImproved: containsUniqueCharactersImproved
};