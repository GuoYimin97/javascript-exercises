const repeatString = function(string, num) {
    let mystr = "";
    if (num < 0) {
        mystr = "ERROR";
    } else {
        for (i = 0; i < num; i++) {
            mystr = mystr + string;
        }
    }
    return mystr;
};

// Do not edit below this line
module.exports = repeatString;
