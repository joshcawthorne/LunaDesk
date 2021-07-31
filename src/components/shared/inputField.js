import styled from "styled-components";

const InputFieldItem = styled.input`
  margin-right: 8px;
  width: 300px;
  margin-bottom: 0;
  padding: 12px 24px;
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

function InputField({ placeholder, value, setValue, type }) {
  return (
    <InputFieldItem
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
}

export default InputField;
