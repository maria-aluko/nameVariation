import { 
  getNumberOfChars, 
  getFirstChar, 
  getLastChar, 
  getLower, 
  getUpper,
  reverseName,
  countVowels,
  countConsonants
} from './variations';

describe('variations.ts', () => {

  test('getNumberOfChars should return the correct length', () => {
    expect(getNumberOfChars('Maria')).toBe(5);
  });

  test('getFirstChar should return the first character', () => {
    expect(getFirstChar('Maria')).toBe('M');
  });

  test('getLastChar should return the last character', () => {
    expect(getLastChar('Maria')).toBe('a');
  });

  test('getLower should return lowercase string', () => {
    expect(getLower('MaRiA')).toBe('maria');
  });

  test('getUpper should return uppercase string', () => {
    expect(getUpper('mAria')).toBe('MARIA');
  });

  test('reverseName should reverse the string', () => {
    expect(reverseName('Maria')).toBe('airaM');
    expect(reverseName('Anna')).toBe('annA');
    expect(reverseName('')).toBe('');
  });

  test('countVowels should count the number of vowels', () => {
    expect(countVowels('Maria')).toBe(3); 
    expect(countVowels('Peter')).toBe(2); 
    expect(countVowels('AEIOU')).toBe(5); 
    expect(countVowels('')).toBe(0);
    expect(countVowels('bcdfg')).toBe(0);
  });

  test('countConsonants should count the number of consonants', () => {
    expect(countConsonants('Maria')).toBe(2); 
    expect(countConsonants('Peter')).toBe(3);
    expect(countConsonants('BCDFG')).toBe(5);
    expect(countConsonants('aeiou')).toBe(0);
    expect(countConsonants('')).toBe(0);
  });

});
