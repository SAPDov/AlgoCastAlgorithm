// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (string) => {
  let newString = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i] === " ") {
      newString += " " + string[i + 1].toUpperCase();
      i++;
    } else {
      newString += string[i];
    }
  }
  return newString;
};

console.log(capitalize("a short sentence"));

module.exports = capitalize;
