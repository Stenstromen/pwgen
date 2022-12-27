import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Options({
  capLetters,
  setCapLetters,
  letters,
  setLetters,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
}: {
  capLetters: boolean;
  setCapLetters: (capLetters: boolean) => void;
  letters: boolean;
  setLetters: (letters: boolean) => void;
  numbers: boolean;
  setNumbers: (numbers: boolean) => void;
  symbols: boolean;
  setSymbols: (symbols: boolean) => void;
}) {
  return (
    <>
      <InputGroup>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <p>lol</p>
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      </InputGroup>
    </>
  );
}

export default Options;
