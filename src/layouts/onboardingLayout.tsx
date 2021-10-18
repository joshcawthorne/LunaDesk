import styled from "styled-components";
import { useStoreState } from "easy-peasy";

const LunaDeskContainer = styled.div``;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
`;

interface AppLayout {
  children: any,
}

const AppLayout = ({ children }: AppLayout) => {
  const { displayCompanySettings, displayUserSettings, displayInviteModal } =
    useStoreState((state) => state.app);

  return (
    <LunaDeskContainer>
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default AppLayout;
