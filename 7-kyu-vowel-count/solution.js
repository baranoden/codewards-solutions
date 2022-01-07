// 7 Kyu - Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;

  let string = str.toString();

  for (var i = 0; i <= str.length - 1; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u"
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getCount("my pyx"));
