const lettersList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "1234567890";
const symbolsList = "!#$%&=?-_";

function getRandomPass({
  long,
  letters,
  capitalLetters,
  numbers,
  symbols,
}: {
  long: number;
  letters: boolean;
  capitalLetters: boolean;
  numbers: boolean;
  symbols: boolean;
}): string {
  let randomPass = "";
  const validContidions: string[] = [];

  if (letters) validContidions.push(lettersList);
  if (capitalLetters) validContidions.push(lettersList.toUpperCase());
  if (numbers) validContidions.push(numbersList);
  if (symbols) validContidions.push(symbolsList);

  for (let i = 0; i < long; i++) {
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
