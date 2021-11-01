import { useState } from "react";
import styled, { css } from "styled-components";

import TextField from "../shared/textField";

interface Props {
  firstItem?: boolean
}


const InviteUserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const InviteUserContainerInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  padding: 20px;
  background-color: ${(props) => props.theme.surface300};
  border-radius: 15px;
`;

const Label = styled.div<Props>`
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => props.theme.text400};
  margin-bottom: 10px;
  margin-left: 10px;
  ${(props) =>
    props.firstItem &&
    css`
      margin-top: 0;
    `}
`;

const InviteField = styled.div`
  width: 100%;
`;

const FakeDropdown = styled.div`
  margin-right: 8px;
  margin-bottom: 0;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  color: ${(props) => props.theme.text100};
  font-size: 16px;
  line-height: 24px;
  width: 270px;
  backdrop-filter: blur(12px) saturate(100%);
  -webkit-backdrop-filter: blur(12px) saturate(50%);
  width: 100%;
  opacity: 0.6;
  cursor: not-allowed;
  box-sizing: border-box;
`;

function InviteUserItem() {
  const [emailInput, setEmailInput] = useState("");
  return (
    <InviteUserContainer>
      <InviteUserContainerInner>
        <InviteField>
          <Label firstItem>Email Address</Label>
          <TextField value={emailInput} setValue={setEmailInput} />
          <Label>User Role</Label>
          <FakeDropdown>User</FakeDropdown>
        </InviteField>
      </InviteUserContainerInner>
    </InviteUserContainer>
  );
}

export default InviteUserItem;
