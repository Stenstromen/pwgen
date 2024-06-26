import React from "react";
import Form from "react-bootstrap/Form";
import { OptionProps } from "../Types";

function Options({ option, setOption }: OptionProps) {
  return (
    <div className="options-container">
      <Form className="options-form">
        <div className="form-check-group">
          <Form.Check
            type="switch"
            id="letters-switch"
            aria-label="Lower"
            label="Lower (abc)"
            checked={option.letters}
            onChange={() => setOption({ ...option, letters: !option.letters })}
          />
          <Form.Check
            type="switch"
            id="capLetters-switch"
            aria-label="Large"
            label="Upper (ABC)"
            checked={option.capLetters}
            onChange={() =>
              setOption({ ...option, capLetters: !option.capLetters })
            }
          />
        </div>
        <div className="form-check-group">
          <Form.Check
            type="switch"
            id="numbers-switch"
            aria-label="Numbers"
            label="Numbers (123)"
            checked={option.numbers}
            onChange={() => setOption({ ...option, numbers: !option.numbers })}
          />
          <Form.Check
            type="switch"
            id="symbols-switch"
            aria-label="Symbols"
            label="Symbols (!#$)"
            checked={option.symbols}
            onChange={() => setOption({ ...option, symbols: !option.symbols })}
          />
        </div>
        <div className="form-check-single">
          <Form.Check
            type="switch"
            id="similar-switch"
            aria-label="Avoid"
            label="Avoid (il1Lo0O)"
            checked={option.avoidSimilar}
            onChange={() =>
              setOption({ ...option, avoidSimilar: !option.avoidSimilar })
            }
          />
        </div>
      </Form>
    </div>
  );
}

export default Options;