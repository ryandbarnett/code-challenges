/* 
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with places after the decimal. 
*/

function plusMinus(arr) {
    var posCount = 0;
    var negCount = 0;
    var zeroCount = 0;
    arr.forEach((int) => {
        if (int == 0) {
            zeroCount++;
        } else if (int < 0) {
            negCount++;
        } else {
            posCount++;
        }
    })
    console.log((posCount / arr.length).toFixed(6));
    console.log((negCount / arr.length).toFixed(6));
    console.log((zeroCount / arr.length).toFixed(6));
}