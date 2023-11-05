// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'    

function pyramid(n) {
    let string = '';

    for (let i = 1; i <= n; i++) {
        const maxString = n * 2 - 1;
        const symbol = '#'.repeat(i * 2 - 1);
        const gap = ' '.repeat((maxString - symbol.length) / 2);
        string = `${gap}${symbol}${gap}`;
        console.log(string);
    }
}

pyramid(1);

module.exports = pyramid;
