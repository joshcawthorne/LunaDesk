import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";
import { motion } from "framer-motion";
import useOnclickOutside from "react-cool-onclickoutside";

import { scrollLocker } from "../../utils/scrollLocker";
import InputButton from "../shared/inputButton";
import DateItem from "./dateItem";

const ChangeDayStatusContainerOuter = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 50;
  position: fixed;
  top: 0;
  overflow-x: hidden;
  max-width: 100%;
  left: 0;
  min-height: fit-content;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundLayer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #101829ad;
  z-index: 40;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(30px);
  @-moz-document url-prefix() {
    background-color: #2d3547;
  }
`;

const MondalContainer = styled(motion.div)`
  padding: 40px;
  border-radius: 10px;
  background-color: #0f0f10;
  z-index: 50;
  width: 850px;
`;

const Title = styled.div`
  font-size: 38px;
  color: #fff;
`;

const Subtext = styled.div`
  font-size: 22px;
  color: #fff;
  opacity: 0.7;
`;

const NewDatesContainer = styled.div`
  width: calc(100% - 80px) auto;
  padding: 40px;
  background-color: #131432;
  margin-top: 40px;
`;

const NewDateTitle = styled.div`
  font-size: 26px;
  color: #fff;
`;

const NewDatesItems = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`;

const MenuContainerAnim = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    backdropFilter: "blur(30px)",
    transition: {
      duration: 0.5,
    },
  },
  unmount: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.3,
      delay: 0,
      ease: "easeIn",
    },
  },
};

const PRE_SET_DAYS = [
  { id: 0, title: "Monday", enabled: true },
  { id: 1, title: "Tuesday", enabled: true },
  { id: 2, title: "Wednesday", enabled: true },
  { id: 3, title: "Thursday", enabled: true },
  { id: 4, title: "Friday", enabled: true },
  { id: 5, title: "Saturday", enabled: false },
  { id: 6, title: "Sunday", enabled: false },
];

function ChangeDayStatus({ userProfile }) {
  const appState = useStoreState((state) => state.app);
  const appActions = useStoreActions((actions) => actions.app);
  const [unmount, setUnmount] = useState(false);
  const { displayModifyDayStatus } = appState;
  const { setDisplayModifyDayStatus } = appActions;
  const [activeDays, setActiveDays] = useState([]);

  const ref = useOnclickOutside(() => {
    if (displayModifyDayStatus) {
      handleClose();
    }
  });

  useEffect(() => {
    let defaultDays = userProfile.default_days;
    let days = PRE_SET_DAYS.map((day) => {
      if (defaultDays.includes(day.id)) {
        let updObj = { ...day, enabled: true };
        return updObj;
      } else {
        let updObj = { ...day, enabled: false };
        return updObj;
      }
    });
    console.log(days);
  }, [userProfile]);

  useEffect(() => {
    if (displayModifyDayStatus) {
      scrollLocker.lock();
    } else {
      scrollLocker.unlock();
    }
  }, [displayModifyDayStatus]);

  function handleClose() {
    setUnmount(true);

    setTimeout(() => {
      setDisplayModifyDayStatus(false);
      setUnmount(false);
    }, 1200);
  }

  function updateArr(id, updatedObj, added) {
    let updDays = days.map((d) => (d.id !== id ? d : updatedObj));
    setDays(updDays);
  }

  console.log(userProfile);

  if (!displayModifyDayStatus) {
    return null;
  }
  return (
    <ChangeDayStatusContainerOuter>
      <MondalContainer ref={ref}>
        <Title>Changed your plans for this week?</Title>
        <Subtext>No worries, it happens to the best of us.</Subtext>
        <NewDatesContainer>
          <NewDateTitle>Modify your schedule for this week</NewDateTitle>
          <NewDatesItems>
            <DateItem title={"Monday"} id={0} state={0} />
            <DateItem title={"Tuesday"} id={0} state={0} />
            <DateItem title={"Wednesday"} id={0} state={0} />
            <DateItem title={"Thursday"} id={0} state={0} />
            <DateItem title={"Friday"} id={0} state={0} />
            <DateItem title={"Saturday"} id={0} state={0} />
            <DateItem title={"Sunday"} id={0} state={0} />
          </NewDatesItems>
        </NewDatesContainer>
      </MondalContainer>
      <BackgroundLayer
        variants={MenuContainerAnim}
        initial="hidden"
        animate={!unmount ? "show" : "unmount"}
      />
    </ChangeDayStatusContainerOuter>
  );
}

export default ChangeDayStatus;
