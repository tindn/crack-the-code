1.1 - Implement an algorithm to determine if a string has all unique characters.

My first attempt was simply to loop through each charater, uses JS *Array.prototype.includes* to 
check if the character is already contained in a unique array. Below is the code for the first
attempt
<pre><code>
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
</code></pre>

Consulting the solution provided two insights:
* It's important to see if the string to be checked is ASCII or Unicode. If it is ASCII, place
a check on the length of the string. If the length is greater than 256, simply returns false.
* To check whether a character is unique, you can initialize an array of 256 boolean flags. For 
each character, gets the  ASCII value and set the flag at that position to be true.

I'm not sure how the function *Array.prototype.includes* is implemented in JavaScript, but the
boolean flag array solution is probably faster if we can limit the string to be checked to be
ASCII. The implementation for that would be 
<pre><code>
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
</pre></code>