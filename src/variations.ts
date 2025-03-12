export function getNumberOfChars(name: string) {
  // number of characters in: name
  const noOfChars = name.length;
  return noOfChars;
}

export function getFirstChar(name: string) {
  // first character of: name
  const firstChar = name[0];
  return firstChar;
}

export function getLastChar(name: string) {
  // last character of: name
  const lastChar = name.charAt(name.length -1);
  return lastChar;
}

export function getLower(name: string) {
  // name all in lower case (example: "ABC" becomes "abc")
  const lowerCase = name.toLowerCase();
  return lowerCase;
}

export function getUpper(name: string) {
  // name all in upper case (example: "abc" becomes "ABC")
  const upperCase = name.toUpperCase();
  return upperCase;
}

export function reverseName(name: string) {
  // reverse the order of: name
  return name.split('').reverse().join('');
}

export function countVowels(name: string) {
  // count number of vowels in: name
  const vowels = name.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

export function countConsonants(name: string) {
  // count number of consonants in: name
  const consonants = name.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return consonants ? consonants.length : 0;
}

