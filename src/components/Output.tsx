import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Output({
  output,
  copyPass,
  isMobile,
}: {
  output: string;
  copyPass: () => void;
  isMobile: boolean;
}) {
  return (
    <InputGroup
      size="lg"
      style={{ width: "75%", paddingTop: isMobile ? "10px" : "20px" }}
    >
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
