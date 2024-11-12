const findTheOldest = function (inputArr) {
    function findTheOldest_ForReduce(cumulative, currentItem) {
        if (currentItem.yearOfDeath === undefined) {
            currentItem.yearOfDeath = new Date().getFullYear();
        }
        if (cumulative.yearOfDeath - cumulative.yearOfBirth < currentItem.yearOfDeath - currentItem.yearOfBirth) {
            cumulative = currentItem;
        }
        return cumulative;
    }

    return inputArr.reduce(findTheOldest_ForReduce, 
        {name: "Default",
        yearOfBirth: new Date().getFullYear(),
        yearOfDeath: new Date().getFullYear()});
};

// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 2018,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
// ];
// console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
