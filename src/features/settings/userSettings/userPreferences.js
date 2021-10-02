import React from "react";
import styled from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";

import RadioButton from "src/components/shared/radioButton";

const ContentContainer = styled.div``;

const Title = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.text300};
`;

function UserPreferences() {
  const { lightMode } = useStoreState((state) => state.preferences);
  const { setLightMode } = useStoreActions((action) => action.preferences);

  return (
    <ContentContainer>
      <Title>Theme</Title>
      <RadioButton
        label={"Light"}
        active={lightMode}
        action={setLightMode}
        value={true}
      />
      <RadioButton
        label={"Dark"}
        active={!lightMode}
        action={setLightMode}
        value={false}
      />
    </ContentContainer>
  );
}

export default UserPreferences;
