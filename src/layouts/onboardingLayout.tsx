import styled from "styled-components";

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
  return (
    <LunaDeskContainer>
      <ContentContainer>{children}</ContentContainer>
    </LunaDeskContainer>
  );
};

export default AppLayout;
