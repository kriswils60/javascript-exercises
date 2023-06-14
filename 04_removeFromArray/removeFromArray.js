const removeFromArray = function(suppliedArray, ...itemsToRemove) {

    for(const item in itemsToRemove) {
        for(let i = 0; i < suppliedArray.length; i++) {
            if(itemsToRemove[item] === suppliedArray[i]) {
                suppliedArray.splice(i, 1);
            }
        }
    }

    return suppliedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
