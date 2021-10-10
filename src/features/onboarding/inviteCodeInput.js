import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CodeInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 12px;
`;

const NumberInput = styled.div`
  display: flex;
  margin-right: -10px;
  margin-bottom: 46px;
`;

const NumberInputItem = styled.input`
  width: 47px;
  height: 47px;
  background: #eee;
  border-radius: 6px;
  border-style: solid;
  border-width: 0px;
  border-color: #0c1afc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #000;
  margin-right: 10px;
  text-align: center;
`;

function InviteCodeInput({ setCodeInputComplete, setCodeInputValue }) {
  const [activeInput, setActiveInput] = useState(setNumInput0);
  const [numInput0, setNumInput0] = useState("");
  const [numInput1, setNumInput1] = useState("");
  const [numInput2, setNumInput2] = useState("");
  const [numInput3, setNumInput3] = useState("");
  const [numInput4, setNumInput4] = useState("");
  const [numInput41, setNumInput41] = useState("");
  const [numInput5, setNumInput5] = useState("");
  const [completedInput, setcompletedInput] = useState(false);

  const num0 = useRef();
  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();
  const num5 = useRef();

  useEffect(() => {
    setCodeInputComplete(false);
    if (num0.current) {
      num0.current.focus();
    }
  }, []);

  useEffect(() => {
    if (numInput0 === "") {
      setCodeInputComplete(false);
    } else if (numInput1 === "") {
      setCodeInputComplete(false);
    } else if (numInput2 === "") {
      setCodeInputComplete(false);
    } else if (numInput3 === "") {
      setCodeInputComplete(false);
    } else if (numInput4 === "") {
      setCodeInputComplete(false);
    } else if (numInput41 === "") {
      setCodeInputComplete(false);
    } else {
      setCodeInputValue(
        numInput0 + numInput1 + numInput2 + numInput3 + numInput4 + numInput41
      );
      setCodeInputComplete(true);
    }
  }, [numInput0, numInput1, numInput2, numInput3, numInput4, numInput41]);

  const functionGlossary = [
    { id: 0, func: setNumInput0 },
    { id: 1, func: setNumInput1 },
    { id: 2, func: setNumInput2 },
    { id: 3, func: setNumInput3 },
    { id: 4, func: setNumInput4 },
    { id: 5, func: setNumInput41 },
  ];

  function handleInput(e, setNumInput, numRef, prevRef, i, keydownEvent) {
    if (e.keyCode === 8) {
      if (e.target.value === "") {
        prevRef.current.focus();
      } else {
        functionGlossary[i].func("");
      }
    } else {
      if (!keydownEvent) {
        if (e.target.value !== "") {
          setNumInput(e.target.value.toUpperCase());
          if (i !== 5) {
            numRef.current.focus();
          }
        } else {
          functionGlossary[i].func("");
        }
      }
    }
  }

  return (
    <CodeInputContainer>
      <NumberInput>
        <NumberInputItem
          type="tel"
          name={"pincode0"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={0}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput0, num1, num0, 0, false)}
          onKeyDown={(e) => handleInput(e, setNumInput0, num1, num0, 0, true)}
          ref={num0}
          value={numInput0}
          onClick={() => {
            num0.current.select();
          }}
          onFocus={() => {
            num0.current.select();
          }}
        />
        <NumberInputItem
          type="tel"
          name={"pincode1"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={1}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput1, num2, num0, 1, false)}
          onKeyDown={(e) => handleInput(e, setNumInput1, num2, num0, 1, true)}
          ref={num1}
          value={numInput1}
          onClick={() => {
            num1.current.select();
          }}
          onFocus={() => {
            num1.current.select();
          }}
        />
        <NumberInputItem
          type="tel"
          name={"pincode2"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={2}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput2, num3, num1, 2, false)}
          onKeyDown={(e) => handleInput(e, setNumInput2, num3, num1, 2, true)}
          ref={num2}
          value={numInput2}
          onClick={() => {
            num2.current.select();
          }}
          onFocus={() => {
            num2.current.select();
          }}
        />
        <NumberInputItem
          type="tel"
          name={"pincode3"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={3}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput3, num4, num2, 3, false)}
          onKeyDown={(e) => handleInput(e, setNumInput3, num4, num2, 3, true)}
          ref={num3}
          value={numInput3}
          onClick={() => {
            num3.current.select();
          }}
          onFocus={() => {
            num3.current.select();
          }}
        />
        <NumberInputItem
          type="tel"
          name={"pincode4"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={4}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput4, num5, num3, 4, false)}
          onKeyDown={(e) => handleInput(e, setNumInput4, num5, num3, 4, true)}
          ref={num4}
          value={numInput4}
          onClick={() => {
            num4.current.select();
          }}
          onFocus={() => {
            num4.current.select();
          }}
        />
        <NumberInputItem
          type="tel"
          name={"pincode5"}
          maxLength="1"
          pattern="[\d]*"
          tabindex={5}
          placeholder=""
          autoComplete="off"
          onChange={(e) => handleInput(e, setNumInput41, num5, num4, 5, false)}
          onKeyDown={(e) => handleInput(e, setNumInput41, num5, num4, 5, true)}
          ref={num5}
          value={numInput41}
          onClick={() => {
            num5.current.select();
          }}
          onFocus={() => {
            num5.current.select();
          }}
        />
      </NumberInput>
    </CodeInputContainer>
  );
}

export default InviteCodeInput;
