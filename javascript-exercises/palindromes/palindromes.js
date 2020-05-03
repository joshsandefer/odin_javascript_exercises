const palindromes = function() {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, “”);
    return (
      processedString
        .split(“”);
        .reverse();
        .join(“”) == processedString;
    );
  };

module.exports = palindromes
