import { useState, useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useHotkeys } from "react-hotkeys-hook";

import Modal from "src/components/shared/modal";
import TextField from "src/components/shared/textField";
import Button from "src/components/shared/button";
import { createUserInvite } from "src/services/company";
import LoadingIcon from "src/components/shared/loadingIcon";
import { DisplaySuccessToast } from "src/components/shared/toast";

import InviteIcon from "src/assets/svg/icons/addUser.svg";
import Tick from "src/assets/svg/icons/tick.svg";

const CompanyInviteContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const CompanyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #fff;
`;

const Title = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.text100};
  margin-top: 15px;

  span {
    font-weight: 600;
  }
`;

const EmailInputContainer = styled.div`
  margin-top: 25px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.text400};
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 104px;
  box-sizing: border-box;
  padding-top: 35px;
`;

function CompanyInvite() {
  const themeContext = useContext(ThemeContext);
  const { displayInviteModal } = useStoreState((state) => state.app);
  const { setDisplayInviteModal } = useStoreActions((actions) => actions.app);

  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  useHotkeys("enter", () => handleInvite());

  async function handleInvite() {
    setLoading(true);
    const userInvite = await createUserInvite(emailInput);
    if (userInvite.error) {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    } else {
      setTimeout(() => {
        DisplaySuccessToast("Invite sent to " + emailInput);
      }, 2300);
      setTimeout(() => {
        setLoading(false);
        closeModal();
      }, 2500);
    }
  }

  function closeModal() {
    setDisplayInviteModal(false);
  }

  return (
    <Modal
      modalVisible={displayInviteModal}
      setModal={setDisplayInviteModal}
      maxWidth={"450px"}
      height={"320px"}
      padding={"30px"}
    >
      <CompanyInviteContainer>
        <InviteIcon width={"50px"} stroke={"#fff"} />
        <Title>
          Invite people to <span>Lucky Duck</span>
        </Title>
        {loading ? (
          <LoaderContainer>
            <LoadingIcon width={"60px"} />
          </LoaderContainer>
        ) : (
          <>
            <EmailInputContainer>
              <Label>Email Address</Label>
              <TextField value={emailInput} setValue={setEmailInput} />
            </EmailInputContainer>
          </>
        )}
        <ButtonContainer>
          <Button
            text={"Send Invite"}
            action={handleInvite}
            style={{ width: "50%", marginRight: "10px" }}
            gradient
            disabled={loading}
          />
          <Button
            text={"Cancel"}
            style={{ width: "50%", marginLeft: "10px" }}
            disabled={loading}
            action={closeModal}
          />
        </ButtonContainer>
      </CompanyInviteContainer>
    </Modal>
  );
}

export default CompanyInvite;
