import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getRandomPass from "./Pwgen";
import Output from "./components/Output";
import Length from "./components/Length";
import Options from "./components/Options";

function App() {
  const [pwLength, setPwLength] = useState<number>(16);
  const [capLetters, setCapLetters] = useState<boolean>(true);
  const [letters, setLetters] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  const generatePassword = (): void => {
    return setOutput(
      getRandomPass({
        long: pwLength,
        capitalLetters: capLetters,
        letters: letters,
        numbers: numbers,
        symbols: symbols,
      })
    );
  };

  return (
    <div>
      <Output output={output} />
      <Length pwLength={pwLength} setPwLength={setPwLength} />
      <Options
        capLetters={capLetters}
        setCapLetters={setCapLetters}
        letters={letters}
        setLetters={setLetters}
        numbers={numbers}
        setNumbers={setNumbers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
      <h1>Uppercase</h1>
      <h1>Lowercase</h1>
      <h1>Numbers</h1>
      <h1>Symbols</h1>
      <h1>Generate</h1>
    </div>
  );
}

export default App;
