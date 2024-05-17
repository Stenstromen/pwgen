import { Option } from "./Types";

const lettersList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "1234567890";
const symbolsList = "!#$%&=?-_";
const similarChars = "il1Lo0O";

function getRandomPass({
  option,
}: {
  option: Option
}): string {
  let randomPass = "";
  const validConditions: string[] = [];

  const filteredLettersList = option.avoidSimilar ? filterSimilarChars(lettersList) : lettersList;
  const filteredNumbersList = option.avoidSimilar ? filterSimilarChars(numbersList) : numbersList;
  const filteredSymbolsList = option.avoidSimilar ? filterSimilarChars(symbolsList) : symbolsList;

  if (option.letters) validConditions.push(filteredLettersList);
  if (option.capLetters) validConditions.push(filteredLettersList.toUpperCase());
  if (option.numbers) validConditions.push(filteredNumbersList);
  if (option.symbols) validConditions.push(filteredSymbolsList);

  for (let i = 0; i < option.length; i++) {
    const pos = Math.floor(Math.random() * validConditions.length);
    randomPass = randomPass + getRandomChar(validConditions[pos]);
  }
  return randomPass;
}

function getRandomChar(characters: string): string {
  const arrayCharacters: string[] = characters.split("");
  const pos = Math.floor(Math.random() * arrayCharacters.length);
  return arrayCharacters[pos];
}

// Helper function to filter out similar-looking characters
function filterSimilarChars(characters: string): string {
  return characters.split("").filter(char => !similarChars.includes(char)).join("");
}

export default getRandomPass;
