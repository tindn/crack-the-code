### 1.1 - Implement an algorithm to determine if a string has all unique characters.

My first attempt was simply to loop through each charater, uses JS *Array.prototype.includes* to 
check if the character is already contained in a unique array. Below is the code for the first
attempt
```JavaScript
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
```

Consulting the solution provided two insights:
* It's important to see if the string to be checked is ASCII or Unicode. If it is ASCII, place
a check on the length of the string. If the length is greater than 256, simply returns false.
* To check whether a character is unique, you can initialize an array of 256 boolean flags. For 
each character, gets the  ASCII value and set the flag at that position to be true.

I'm not sure how the function *Array.prototype.includes* is implemented in JavaScript, but the
boolean flag array solution is probably faster if we can limit the string to be checked to be
ASCII. The implementation for that would be 
```JavaScript
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
```
### 1.2 Implement a function that reverses a string
My initial attempt is to split the string into an array and use *Array.prototype.reduce*
to reverse the string. This is a very JavaScripty way to do things, and the time complexity
of the function is O(n), n being the length of the string.
```JavaScript
function reverse(stringToReverse) {
    var stringArray = stringToReverse.split('');
    var reversed = stringArray.reduce(function(acc, val) {
        acc = val + acc;
        return acc;
    });
    return reversed;
}
```
Consulting the solution provides another method which swap positions of a pair of characters,
leaving the middle character intact. The complexity in this case is O(n/2).
```JavaScript
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
```

### 1.3 Implement an algorithm to determine if two strings are permutations

First, checking the lengths of the two strings, if the lengths are different, 
the two strings are not permutations.

My initial attmpt did not taken into account repeated characters. So I consulted
with the solution. The function will first sort the to strings and then loop through
the first sorted array and check against the second array.
```JavaScript
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

```