import styled from "styled-components";
import { useStoreState } from "easy-peasy";

import withAuth from "../utils/withAuth";

const LunaDeskContainer = styled.div``;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(211, 235, 243);
  background: radial-gradient(
    circle,
    rgba(211, 235, 243, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  );
`;

const AppLayout = ({ children }) => {
  const { displayCompanySettings, displayUserSettings, displayInviteModal } =
    useStoreState((state) => state.app);

  return (
    <LunaDeskContainer>
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default withAuth(AppLayout);
