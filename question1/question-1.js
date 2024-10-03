function lowerCaseWords(input) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(input)) {
            reject("Input must be an array");
            return;
        }

        const filteredAndLowerCased = input.filter(item => typeof item === 'string')
                                           .map(string => string.toLowerCase());
        
        resolve(filteredAndLowerCased);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));