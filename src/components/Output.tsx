import React from "react";
import { OutputProps } from "../Types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Output({ output, copyPass }: OutputProps) {
  return (
    <InputGroup size="lg" className="output-InputGroup">
      <Form.Control
        readOnly
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder={output}
      />
        <Button onClick={copyPass} variant="primary" id="button-addon2">
          Copy
        </Button>
    </InputGroup>
  );
}

export default Output;
