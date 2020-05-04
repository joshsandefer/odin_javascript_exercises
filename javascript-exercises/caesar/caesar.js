const caesar = function(string, shift) {
    let newString = string
        .split('')
        .map(char => shiftFunction(char, shift))
        .join('');
    return newString;
}

const getUnicode = char => char.charCodeAt();
const modifier = charUnicode => charUnicode < 97 ? 65 : 97;
const wrapper = (a, b) => (a % b + b) % b;


function shiftFunction(char, shift) {
    const charUnicode = char.charCodeAt(0);
    if ((charUnicode > 64 && charUnicode < 91) || (charUnicode > 96 && charUnicode < 123)) {
        return String.fromCharCode(
            wrapper(charUnicode + shift - modifier(charUnicode), 26) + modifier(charUnicode)
            ); 
    } return char;
}

module.exports = caesar
