const caesar = function(string, shift) {
    let newString = string
        .split('')
        .map(char => shiftFunction(char, shift))
        .join('');
    return newString;
}

const getUnicode = char => char.charCodeAt();

function shiftFunction(char, shift) {
    let charUnicode = char.charCodeAt(0);
    let newChar = charUnicode + shift;
    const newString = String.fromCharCode(newChar); 
    return newString;
}

//module.exports = caesar
