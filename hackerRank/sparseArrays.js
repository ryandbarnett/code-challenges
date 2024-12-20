/*
There is a collection of input strings and a collection of query strings.
For each query string, determine how many times it occurs in the list of input strings.
Return an array of the results.
*/

function matchingStrings(strings, queries) {
    return queries.map(query => {
        let count = 0;
        strings.forEach(string => {
            if (string == query) {
                count++;
            }
        });
        return count;
    });
}