import React from "react";
import Form from "react-bootstrap/Form";

function Length({
  option,
  setOption,
}: {
  option: {
    length: number;
    capLetters: boolean;
    letters: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  setOption: (option: {
    length: number;
    capLetters: boolean;
    letters: boolean;
    numbers: boolean;
    symbols: boolean;
  }) => void;
}) {
  return (
    <div style={{ width: "75%" }} className="d-flex flex-column">
      &nbsp;
      <div className="d-flex">
        <p>
          <strong>4</strong>
        </p>
        &nbsp;
        <Form.Range
          min="4"
          max="32"
          onChange={(e) =>
            setOption({ ...option, length: parseInt(e.target.value) })
          }
          value={option.length}
        />
        &nbsp;
        <p>
          <strong>32</strong>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          <strong>{option.length} Characters</strong>
        </p>
      </div>
      &nbsp;
    </div>
  );
}

export default Length;
