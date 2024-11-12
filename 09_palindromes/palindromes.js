const palindromes = function (inputStr) {
    inputStrClean = inputStr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    reverseStr = inputStrClean.split('').reverse().join('');
    if (inputStrClean === reverseStr) {
        return true;
    } else { return false; }
};

// Do not edit below this line
module.exports = palindromes;
