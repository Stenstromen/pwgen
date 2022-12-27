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
    <>
      <Form.Label>Range</Form.Label>
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
      <p>
        <strong>{pwLength}</strong>
      </p>
    </>
  );
}

export default Length;
