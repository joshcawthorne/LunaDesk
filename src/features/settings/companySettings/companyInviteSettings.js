import { useState } from "react";
import styled from "styled-components";

import TextField from "components/shared/textField";
import InviteItem from "components/settings/inviteUserItem";

const ContentContainer = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.text100};
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`;

const InviteContainer = styled.div``;

function CompanyInviteSettings() {
  const [inviteEmailInput, setInviteEmailInput] = useState("");
  return (
    <ContentContainer>
      <Title>Invite people to Lucky Duck</Title>
      <InviteContainer>
        <InviteItem />
      </InviteContainer>
    </ContentContainer>
  );
}

export default CompanyInviteSettings;
