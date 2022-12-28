import React from "react";
import Form from "react-bootstrap/Form";

function Options({
  capLetters,
  setCapLetters,
  letters,
  setLetters,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
  isMobile,
}: {
  capLetters: boolean;
  setCapLetters: (capLetters: boolean) => void;
  letters: boolean;
  setLetters: (letters: boolean) => void;
  numbers: boolean;
  setNumbers: (numbers: boolean) => void;
  symbols: boolean;
  setSymbols: (symbols: boolean) => void;
  isMobile: boolean;
}) {
  return (
    <div
      style={{ width: "100%", paddingBottom: isMobile ? "60px" : "" }}
      className={
        isMobile
          ? "d-flex justify-content-center"
          : "d-flex justify-content-center flex-grow-1"
      }
    >
      <Form
        style={{ fontSize: "30px", paddingTop: isMobile ? "10px" : "40px" }}
        className={
          isMobile
            ? "d-flex flex-column align-items-center"
            : "d-inline-flex d-flex"
        }
      >
        <div style={{marginRight: isMobile ? "30px" : ""}}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Lower (abc)"
            defaultChecked={letters}
            onChange={() => setLetters(!letters)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Upper (ABC)"
            defaultChecked={capLetters}
            onChange={() => setCapLetters(!capLetters)}
          />
        </div>
        {isMobile ? null : (<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>)}
        <div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Numbers (123)"
            defaultChecked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Symbols (!#$)"
            defaultChecked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
      </Form>
    </div>
  );
}

export default Options;
