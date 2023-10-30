// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// obj = {a: 1}

function maxChar(str) {
    let charObject = {};
    let charMax = '';
    let max = 0;

    for (let char of str) {
        if (charObject[char]) {
            charObject[char]++;
        } else {
            charObject[char] = 1;
        }
    }

    for (let char in charObject) {
        if (max < charObject[char]) {
            charMax = char;
            max = charObject[char];
        }
    }

    return charMax;
}

maxChar("sapir");

module.exports = maxChar;
