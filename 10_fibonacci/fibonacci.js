const fibonacci = function (inputNumber) {

    if (typeof inputNumber !== "number") {
        n = Number(inputNumber);
    } else {
        n = inputNumber;
    }

    let arr = [1, 1, 2, 3, 5, 8];
    if (n < 0) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    } else if (n <= 6) {
        return arr[n - 1];
    } else {
        for (i = 6; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr[n - 1];
    }

};

// console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
