var chapter1 = require('../chapter1/index.js');

describe('unique characters expects', function(){
    it('string abc to pass', function(){
        expect(chapter1.containsUniqueCharacters('abc')).toBe(true); 
        expect(chapter1.containsUniqueCharactersImproved('abc')).toBe(true);
    });
    it('string aab to fail', function() {
        expect(chapter1.containsUniqueCharacters('aab')).toBe(false)
        expect(chapter1.containsUniqueCharactersImproved('aab')).toBe(false);
    })
    it('string longer than 256 characters', function() {
        expect(chapter1.containsUniqueCharactersImproved(
            'This is a very long string. It needs to be longer than ' +
            '256 characters. Therefore it needs to be much loooooonger' +
            'than this. No, keep going. Do you know how long 256 ' +
            'characters is? Very, very, extremely loooooooooooooooong.' +
            'Keep going. You are almost there. Just a little more'
        )).toBe(false);
    })
});

describe('reverse string expects', function() {
    it('string "test" to be "tset"', function() {
        expect(chapter1.reverse('test')).toBe('tset');
        expect(chapter1.reverse2('test')).toBe('tset');
    });
    it('string "abcde" to be "edcba"', function(){
        expect(chapter1.reverse('abcde')).toBe('edcba');
        expect(chapter1.reverse2('abcde')).toBe('edcba');
    })
});

describe('check if two strings are permuatations', function() {
    it('strings "abcde" and "edcba" are permutations', function() {
        expect(chapter1.arePermutations('abcde', 'edcba')).toBe(true);
    });
    it('strings "abcde" and "abcce" are not permutations', function(){
        expect(chapter1.arePermutations('abcde','abcce')).toBe(false);
    });
    it('strings "abccd" and "cabcd" are permutations', function() {
        expect(chapter1.arePermutations('abccd', 'cabcd')).toBe(true);
    });
});

describe('replaces spaces in a string with "%20"', function() {
    it('string "a b c d e" will be "a%20b%20c%20d%20e"', function() {
        expect(chapter1.replaceSpaces('a b c d e')).toBe('a%20b%20c%20d%20e');
    });
    it('string "a b c  " to be "a%20b%20c%20%20"', function(){
        expect(chapter1.replaceSpaces('a b c  '));
    });
});

