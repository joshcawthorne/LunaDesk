import styled from "styled-components";


const InnerTitle = styled.div`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  color: ${props => props.theme.textPrimary};
`;

const InnerDesc = styled.div`
  font-size: 14px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 4px;
  max-width: 360px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textPrimary};
`;

const InputFieldItem = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 13px;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.5;
  color: ${props => props.theme.textPrimary};
`;

export { InnerTitle, InnerDesc, InputFieldItem, Label };
