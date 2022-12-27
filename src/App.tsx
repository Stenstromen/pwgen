import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getRandomPass from "./Pwgen";
import Output from "./components/Output";
import Length from "./components/Length";
import Options from "./components/Options";
import Generate from "./components/Generate";

function App() {
  const [pwLength, setPwLength] = useState<number>(16);
  const [capLetters, setCapLetters] = useState<boolean>(false);
  const [letters, setLetters] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [output, setOutput] = useState<string>("");

  const generatePassword = (): void => {
    console.log("LOL")
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
      <Generate generatePassword={generatePassword}/>
    </div>
  );
}

export default App;
