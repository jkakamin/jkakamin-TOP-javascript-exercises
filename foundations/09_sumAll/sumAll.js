const sumAll = function(a, b) {
    const inputs = [a, b];
    let allInts = [];
    let sumInts;

    inputs.sort( (a, b) => a - b )
    
    for (let i = inputs[0]; i <= inputs[1]; i++){
        allInts.unshift(i);
    }

    sumInts =
        typeof(a) !== 'number' || typeof(b) !== 'number'?
        'ERROR':
        a >= 0 && b >=0 && ((a + b) % 1) === 0 ?
        allInts.reduce( (total, curr) => total + curr ):
        'ERROR';
    
    return sumInts;


};

// Do not edit below this line
module.exports = sumAll;
