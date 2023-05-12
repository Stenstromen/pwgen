import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import getRandomPass from "./Pwgen";
import Output from "./components/Output";
import Length from "./components/Length";
import Options from "./components/Options";
import Generate from "./components/Generate";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [pwLength, setPwLength] = useState<number>(15);
  const [option, setOption] = useState<{
    capLetters: boolean;
    letters: boolean;
    numbers: boolean;
    symbols: boolean;
  }>({
    capLetters: false,
    letters: true,
    numbers: true,
    symbols: false,
  });

  const [output, setOutput] = useState<string>("");

  const generatePassword = (): void => {
    if (
      !option.capLetters &&
      !option.letters &&
      !option.numbers &&
      !option.symbols
    )
      return;
    return setOutput(
      getRandomPass({
        long: pwLength,
        option,
      })
    );
  };

  const copyPass = (): void => {
    const oldOutput = output;
    navigator.clipboard.writeText(output);
    setOutput("Copied To Clipboard!");
    setTimeout(() => {
      setOutput(oldOutput);
    }, 1500);
  };

  useEffect(() => {
    return generatePassword();
  }, [pwLength, option]);

  useEffect(() => {
    return window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      return window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        style={{
          backgroundColor: "white",
          width: isMobile ? "385px" : "1000px",
          height: isMobile ? "85vh" : "95vh",
          marginTop: "20px",
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
        className="d-flex flex-column align-items-center rounded"
      >
        <h1>Password Generator</h1>
        &nbsp;
        <Output output={output} copyPass={copyPass} isMobile={isMobile} />
        <Length pwLength={pwLength} setPwLength={setPwLength} />
        <Options option={option} setOption={setOption} isMobile={isMobile} />
        <Generate generatePassword={generatePassword} />
      </div>
    </div>
  );
}

export default App;
