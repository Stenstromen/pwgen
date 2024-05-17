import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Option } from "./Types";
import { saveSettings, loadSettings } from "./LocalStorage";
import getRandomPass from "./Pwgen";
import Output from "./components/Output";
import Length from "./components/Length";
import Options from "./components/Options";
import Generate from "./components/Generate";

function App() {
  const [output, setOutput] = useState<string>("");
  const [option, setOption] = useState<Option>({
    length: 15,
    capLetters: false,
    letters: true,
    numbers: true,
    symbols: false,
    avoidSimilar: true,
  });

  const generatePassword = useCallback(() => {
    if (
      !option.capLetters &&
      !option.letters &&
      !option.numbers &&
      !option.symbols
    )
      return;
    setOutput(
      getRandomPass({
        option,
      })
    );
  }, [option]);

  const copyPass = useCallback(() => {
    const oldOutput = output;
    navigator.clipboard.writeText(output);
    setOutput("Copied To Clipboard!");
    setTimeout(() => {
      setOutput(oldOutput);
    }, 1500);
  }, [output]);

  useEffect(() => {
    return loadSettings(setOption);
  }, []);

  useEffect(() => {
    generatePassword();
    saveSettings(option);
  }, [option]);

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>Password Generator</h1>
        &nbsp;
        <Output output={output} copyPass={copyPass} />
        <Length option={option} setOption={setOption} />
        <Options option={option} setOption={setOption} />
        <Generate generatePassword={generatePassword} />
      </div>
    </div>
  );
}

export default App;
