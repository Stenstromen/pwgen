export interface OutputProps {
  output: string;
  copyPass: () => void;
}
export interface OptionProps {
  option: Option;
  setOption: (option: Option) => void;
}
export interface Option {
  length: number;
  capLetters: boolean;
  letters: boolean;
  numbers: boolean;
  symbols: boolean;
}
