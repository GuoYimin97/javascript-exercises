const leapYears = function(givenYear) {
    if (givenYear % 400 === 0) {
        ifLeapYear = true;
    } else if (givenYear % 4 === 0 && givenYear % 100 !== 0) {
        ifLeapYear = true;
    } else {
        ifLeapYear = false;
    }
    return ifLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
