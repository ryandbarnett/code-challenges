/*
Camel Case is a naming style common in many programming languages.
In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread).
Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).
Your task is to write a program that creates or splits Camel Case variable, method, and class names.
*/

function processData(input) {
    // Split input into lines and filter out empty or whitespace-only lines
    const lines = input.split("\n").map(line => line.trim()).filter(line => line !== "");

    lines.forEach((line) => {
        const [operation, type, words] = line.split(";").map(part => part.trim());

        if (operation === "S") {
            console.log(splitOperation(words, type));
        } else if (operation === "C") {
            console.log(combineOperation(words, type));
        }
    });
}

function splitOperation(camelCaseString, type) {
    // Handle edge cases for empty strings
    if (!camelCaseString) return "";

    // Split camelCase or PascalCase
    let words = camelCaseString.replace(/([a-z])([A-Z])/g, "$1 $2").trim();

    // Remove trailing parentheses for methods
    if (type === "M") {
        words = words.replace(/\(\)$/, "");
    }

    // Return space-separated lowercase words
    return words.toLowerCase();
}

function combineOperation(words, type) {
    // Handle edge cases for empty strings
    if (!words) return "";

    // Split words by space and remove extra spaces
    const wordList = words.split(" ").map(word => word.trim()).filter(word => word !== "");

    // Convert words into camelCase or PascalCase
    const result = wordList
        .map((word, index) => {
            if (type === "C" || index > 0) {
                return capitalize(word); // Capitalize for classes or subsequent words
            }
            return word.toLowerCase(); // Keep first word lowercase for variables/methods
        })
        .join("");

    // Add parentheses for methods
    if (type === "M") {
        return result + "()";
    }

    return result;
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}