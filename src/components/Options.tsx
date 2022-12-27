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
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Letters"
        defaultChecked={letters}
        onChange={() => setLetters(!letters)}
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Captial Letters"
        defaultChecked={capLetters}
        onChange={() => setCapLetters(!capLetters)}
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Numbers"
        defaultChecked={numbers}
        onChange={() => setNumbers(!numbers)}
      />
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Symbols"
        defaultChecked={symbols}
        onChange={() => setSymbols(!symbols)}
      />
    </Form>
  );
}

export default Options;
