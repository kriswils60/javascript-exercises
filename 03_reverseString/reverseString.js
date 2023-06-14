const reverseString = function(textToReverse) {
    const arrayHolder = textToReverse.split("");
    const arrayLength = arrayHolder.length;
    let output = '';

    for (let i = 1; i <= arrayLength; i++) {

        output += arrayHolder[arrayLength - i];

    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
