const reverseString = function(str) {
let arr = [];

for (let i = 0; i < str.length; i++){
    arr.unshift(
        str.charAt(i)
    )
}

return arr.join("");

};

// Do not edit below this line
module.exports = reverseString;
