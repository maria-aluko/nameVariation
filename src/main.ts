import {getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, reverseName, countVowels, countConsonants} from "./variations.ts";

const answer1 = document.querySelector("#answer1") as HTMLDivElement;
const answer2 = document.querySelector("#answer2") as HTMLDivElement;
const answer3 = document.querySelector("#answer3") as HTMLDivElement;
const answer4 = document.querySelector("#answer4") as HTMLDivElement;
const answer5 = document.querySelector("#answer5") as HTMLDivElement;
const answer6 = document.querySelector("#answer6") as HTMLDivElement;
const answer7 = document.querySelector("#answer7") as HTMLDivElement;
const answer8 = document.querySelector("#answer8") as HTMLDivElement;

const name = document.querySelector("#your-name") as HTMLInputElement;

name.addEventListener("keyup", () => {
    const value = name.value;
    const nbChars = getNumberOfChars(value);
    const firstChar = getFirstChar(value);
    const lastChar = getLastChar(value);
    const lower = getLower(value);
    const upper = getUpper(value);
    const reverse = reverseName(value);
    const vowels = countVowels(value);
    const consonants = countConsonants(value);
    answer1.textContent = nbChars.toString();

    if (typeof firstChar === "string") {
        answer2.textContent = firstChar;
    }
    if (typeof lastChar === "string") {
        answer3.textContent = lastChar;
    }
    if (typeof lower === "string") {
        answer4.textContent = lower;
    }
    if (typeof upper === "string") {
        answer5.textContent = upper;
    }
    if(typeof reverse === "string") {
        answer6.textContent = reverse;
    }
    answer7.textContent = vowels.toString();
    answer8.textContent = consonants.toString();
});