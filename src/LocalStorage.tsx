export const saveSettings = (option: {
  length: number;
  capLetters: boolean;
  letters: boolean;
  numbers: boolean;
  symbols: boolean;
}): void => {
  if (
    !option.capLetters &&
    !option.letters &&
    !option.numbers &&
    !option.symbols
  )
    return;
  localStorage.setItem("pwgen.cz_options", JSON.stringify(option));
};

export const loadSettings = (
  setOption: (option: {
    length: number;
    capLetters: boolean;
    letters: boolean;
    numbers: boolean;
    symbols: boolean;
  }) => void
): void => {
  const savedOptions = localStorage.getItem("pwgen.cz_options");
  if (savedOptions) {
    const savedOptionsObj = JSON.parse(savedOptions);
    setOption(savedOptionsObj);
  }
};
