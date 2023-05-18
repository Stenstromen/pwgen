import React from "react";
import Form from "react-bootstrap/Form";
import { OptionProps } from "../Types";

function Length({ option, setOption }: OptionProps) {
  return (
    <div className="d-flex flex-column length-Form">
      &nbsp;
      <div className="d-flex">
        <p>
          <strong>4</strong>
        </p>
        &nbsp;
        <Form.Range
          id="length-range"
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
