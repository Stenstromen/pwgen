import React from "react";
import Button from "react-bootstrap/Button";

function Generate({ generatePassword }: { generatePassword: () => void }) {
  return (
    <div>
      <Button onClick={generatePassword} size="lg" variant="success">
        Generate P4$$w0rd
      </Button>
    </div>
  );
}

export default Generate;
