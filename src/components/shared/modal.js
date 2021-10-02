import styled, { css } from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";

const ModalOuterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1005;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #10182922;
  backdrop-filter: blur(30px);
  cursor: pointer;
  @-moz-document url-prefix() {
    background-color: #2d3547;
  }
`;

const ModalContainer = styled.div`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.surface100};
  color: ${(props) => props.theme.text100};
  cursor: initial;
  border-radius: 10px;
  width: 95%;
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  overflow-y: auto;
`;

const Title = styled.div`
  font-size: 32px;
  color: ${(props) => props.theme.text100};
  font-weight: 500;
  margin-bottom: 20px;
  span {
    font-weight: bold;
  }
`;

const ContentContainer = styled.div``;

function Modal({
  children,
  title,
  modalVisible,
  setModal,
  height = "600px",
  maxWidth = "800px",
  padding = "40px",
}) {
  const ref = useOnclickOutside(() => {
    if (modalVisible) {
      setModal(false);
    }
  });

  return (
    <ModalOuterContainer>
      <ModalContainer
        ref={ref}
        height={height}
        maxWidth={maxWidth}
        padding={padding}
      >
        <Title>{title}</Title>
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </ModalOuterContainer>
  );
}

export default Modal;
