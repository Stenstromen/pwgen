import { Option } from "./Types";

const lettersList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "1234567890";
const symbolsList = "!#$%&=?-_";

function getRandomPass({
  option,
}: {
  option: Option
}): string {
  let randomPass = "";
  const validContidions: string[] = [];

  if (option.letters) validContidions.push(lettersList);
  if (option.capLetters) validContidions.push(lettersList.toUpperCase());
  if (option.numbers) validContidions.push(numbersList);
  if (option.symbols) validContidions.push(symbolsList);

  for (let i = 0; i < option.length; i++) {
    const pos = Math.floor(Math.random() * validContidions.length);
    randomPass = randomPass + getRandomChar(validContidions[pos]);
  }
  return randomPass;
}

function getRandomChar(charters: string): string {
  const arrayCharacters: string[] = charters.split("");
  const posr = Math.floor(Math.random() * arrayCharacters.length);
  return arrayCharacters[posr];
}

export default getRandomPass;
