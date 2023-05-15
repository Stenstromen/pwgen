import { Option } from "./Types";

export const saveSettings = (option: Option): void => {
  if (
    !option.capLetters &&
    !option.letters &&
    !option.numbers &&
    !option.symbols
  )
    return;
  localStorage.setItem("pwgen.cz_options", JSON.stringify(option));
};

export const loadSettings = (setOption: (option: Option) => void): void => {
  const savedOptions = localStorage.getItem("pwgen.cz_options");
  if (savedOptions) {
    const savedOptionsObj = JSON.parse(savedOptions);
    setOption(savedOptionsObj);
  }
};
