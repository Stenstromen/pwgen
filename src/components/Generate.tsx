import React from "react";
import Button from "react-bootstrap/Button";

function Generate(generatePassword:{generatePassword: () => void;}) {
  return (
    <>
      <Button onClick={() => generatePassword} variant="success">Generate P4$$w0rd</Button>
    </>
  );
}

export default Generate;
