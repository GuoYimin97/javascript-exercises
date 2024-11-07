const removeFromArray = function(inputArray, ...rest) {
    let outputArray = [];
    for (i=0; i<inputArray.length; i++) {
        if (!rest.includes(inputArray[i])) {
            console.log(inputArray[i]);
            outputArray.push(inputArray[i]);
        }
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
