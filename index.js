/**
 * using node version 12.2.0 but could possible run node versions as low as 6.12.0
 * 
 * usage: node index.js -s [xxxxxxx]
 */

const optionDefinitions = [
    { name: 'stringInput', alias: 's', type: String }
];

const commandLineArgs = require('command-line-args');
const options = commandLineArgs(optionDefinitions);

const input = (((options.stringInput == null) ||(options.stringInput == undefined)) ? 
"" : 
options.stringInput + "").trim();

// arrow function usage
((str) => {
    const strLength = str.length;
    let startCounter = 0;
    let endCounter = str.length - 1;

    //es6 string interpolation
    //console.info(`str has value: ${str} with length: ${strLength}`);

    let isPalindrome = true;

    if (strLength <= 0 )
    {
        console.log(isPalindrome);
        return;
    }

    while(endCounter >= startCounter)
    {
        const leftChar = str[startCounter++];
        const rightChar = str[endCounter--];

        if (leftChar != rightChar)
        {
            isPalindrome = false;
            break;
        }
    }

    console.log(isPalindrome);
})(input);