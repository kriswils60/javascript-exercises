const sumAll = function(number1, number2) {
    let output = 0,
        largerNum = number2,
        smallerNum = number1;

    if(typeof number1 === "number" && typeof number2 === "number" && number1 >= 0 && number2 >= 0) {

        if (number1 > number2) {
            largerNum = number1;
            smallerNum = number2;
        }

        for(let i = smallerNum; i <= largerNum; i++) {
            output += i;
        }

    } else output = 'ERROR';

    return output;
};
// 1,3 = 1 + 2 + 3
// 4,1 = 1 + 2 + 3 + 4
// 1,1 = 1 + 1
// Do not edit below this line
module.exports = sumAll;
