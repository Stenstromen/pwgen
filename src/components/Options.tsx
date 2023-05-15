import React from "react";
import Form from "react-bootstrap/Form";
import { Option } from "../Types";

function Options({
  option,
  setOption,
  isMobile,
}: {
  option: Option;
  setOption: (option: Option) => void;
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
        <div style={{ marginRight: isMobile ? "30px" : "" }}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Lower (abc)"
            checked={option.letters}
            onChange={() => setOption({ ...option, letters: !option.letters })}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Upper (ABC)"
            checked={option.capLetters}
            onChange={() =>
              setOption({ ...option, capLetters: !option.capLetters })
            }
          />
        </div>
        {isMobile ? null : <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>}
        <div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Numbers (123)"
            checked={option.numbers}
            onChange={() => setOption({ ...option, numbers: !option.numbers })}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Symbols (!#$)"
            checked={option.symbols}
            onChange={() => setOption({ ...option, symbols: !option.symbols })}
          />
        </div>
      </Form>
    </div>
  );
}

export default Options;
