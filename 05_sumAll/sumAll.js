const sumAll = function(intBound1, intBound2) {
    let sum = 0;

    if (typeof intBound1 === "number" && typeof intBound2 === "number"
        && intBound1 > 0 && intBound2 > 0
        && Number.isInteger(intBound1) && Number.isInteger(intBound2)
    ) {
        if (intBound1 < intBound2) {
            for (i = intBound1; i <= intBound2; i++) {
                sum += i;
            }
        } else if (intBound1 > intBound2) {
            for (i = intBound2; i <= intBound1; i++) {
                sum += i;
            }
        } else {
            sum = intBound1 + intBound2;
        }
        
    } else {
        sum = "ERROR";
    }
    
    return sum;
};

console.log(sumAll(1,10));
console.log(typeof 123 === "number");

// Do not edit below this line
module.exports = sumAll;
