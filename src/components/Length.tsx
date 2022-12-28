import React from "react";
import Form from "react-bootstrap/Form";

function Length({
  pwLength,
  setPwLength,
}: {
  pwLength: number;
  setPwLength: (pwLength: number) => void;
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
          onChange={(e) => setPwLength(parseInt(e.target.value))}
          value={pwLength}
        />
        &nbsp;
        <p>
          <strong>32</strong>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          <strong>{pwLength} Characters</strong>
        </p>
      </div>
      &nbsp;
    </div>
  );
}

export default Length;
