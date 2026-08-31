const removeFromArray = function(arr, a, b, c, d) {
    let remove = [a, b, c, d];
    let newArr = [];

    return arr
        .filter( (element) =>
            ! remove.includes(element)
        )

    
};

// Do not edit below this line
module.exports = removeFromArray;
