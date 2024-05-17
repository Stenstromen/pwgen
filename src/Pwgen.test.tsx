import getRandomPass from "./Pwgen";

describe("getRandomPass", () => {
  const option = {
    letters: true,
    capLetters: true,
    numbers: true,
    symbols: true,
    length: 32,
    avoidSimilar: false,
  };

  it("should generate a random password with the specified length and character options", () => {
    const randomPass = getRandomPass({ option });
    expect(randomPass.length).toBe(option.length);
    expect(randomPass).toMatch(/[a-z]/);
    expect(randomPass).toMatch(/[A-Z]/);
    expect(randomPass).toMatch(/[0-9]/);
    expect(randomPass).toMatch(/[!#$%&=?-_]/);
  });

  it("should generate a random password with only letters if numbers and symbols options are set to false", () => {
    const optionWithoutNumbersAndSymbols = {
      ...option,
      numbers: false,
      symbols: false,
    };
    const randomPass = getRandomPass({
      option: optionWithoutNumbersAndSymbols,
    });
    expect(randomPass.length).toBe(option.length);
    expect(randomPass).toMatch(/[a-zA-Z]+/);
  });
});
