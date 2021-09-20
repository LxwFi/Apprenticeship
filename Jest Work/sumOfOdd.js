let sumOfOdd = function (arr) {
    let sum = 0;
    for (let i of arr) {
        if (i % 2 == 1 || i % 2 == -1) {
            sum += i;
        }
    }
    return sum;

}


module.exports = sumOfOdd;