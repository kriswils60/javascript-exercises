const repeatString = function(theString, repeatTimes) {
    let output = '';

    if(repeatTimes >= 0) {
        for (let i = 0; i < repeatTimes; i++) {
            output += theString;
        }
    } else {
        output = 'ERROR';
    }

    return output;

};

// Do not edit below this line
module.exports = repeatString;
