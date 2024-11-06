const reverseString = function(inputStr) {
    let outputStr = "";
    for (i = inputStr.length-1; i > -1; i--) {
        outputStr += inputStr[i];
    }
    return outputStr;
};

// console.log(reverseString("DonaldJTrump"))

// Do not edit below this line
module.exports = reverseString;
