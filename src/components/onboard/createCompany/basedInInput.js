import { useState, useEffect } from "react";
import styled from "styled-components";
import InputButton from "../../shared/inputButton";

import { countries } from "../../../utils/countries";

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  color: #d9c9d8;
  max-width: 450px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  b {
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
  }
`;

const Title = styled.div`
  font-size: 32px;
  text-align: center;
  margin-bottom: 5px;
  color: #ebe2ea;
  b {
    font-weight: 500;
    color: #fff;
    margin-left: 5px;
  }
`;

const Dropdown = styled.select`
  margin-right: 8px;
  width: 300px;
  margin-bottom: 0;
  padding: 14px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  -webkit-transition: 0.2s;
  transition: 0.2s;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  outline: none;
`;

function BasedInInput({ setSelectedStage, setFinalValue, companyName }) {
  const [selectedValue, setSelectedValue] = useState("Select");
  const [changed, setChanged] = useState(false);

  function handleChange(value) {
    setSelectedValue(value);
    setChanged(true);
  }

  function progress() {
    setFinalValue(selectedValue);
    setSelectedStage(2);
  }
  return (
    <div>
      <Title>
        OK, where is <b>{companyName}</b> based?
      </Title>
      <Desc>
        Don't worry if you have offices all over the world, just set your main
        office location here.
      </Desc>

      <Dropdown
        onChange={(e) => handleChange(e.target.value)}
        value={selectedValue}
      >
        <option selected disabled>
          Select
        </option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </Dropdown>
      <InputButton action={progress} text={"Continue"} disabled={!changed} />
    </div>
  );
}

export default BasedInInput;
