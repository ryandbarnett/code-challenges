/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
    let sum = 0;
    var low = arr[0];
    var high = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > high) {
            high = arr[i];
        }
        if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(`${(sum - high)} ${(sum - low)}`)
}