/*
Given an array of integers and a positive integer k, 
determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.
*/

function divisibleSumPairs(n, k, ar) {
    let pairCount = 0;

    // Iterate over all possible pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairCount++;
            }
        }
    }

    return pairCount;
}