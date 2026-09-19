const palindromes = function (str) {
    let removeChars = [' ', ',', '.', '!', '?', ];
    
    let letters = str.toLowerCase();

    for(let i = 0; i < removeChars.length; i++){
        letters = letters
            .split(removeChars[i])
            .join('')
        ;
    };

    let reverseLetters = letters
        .split('')
        .reverse()
        .join('')
    ;

    return letters === reverseLetters;
};

// Do not edit below this line
module.exports = palindromes;
