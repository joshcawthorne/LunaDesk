import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useStoreState, useStoreActions } from "easy-peasy";
import { motion } from "framer-motion";
import useOnclickOutside from "react-cool-onclickoutside";
import { supabase } from "../../utils/supabaseClient";

import { scrollLocker } from "../../utils/scrollLocker";
import InputButton from "../shared/inputButton";
import DayToggle from "../onboard/createCompany/dayToggle";
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

const DEFAULT_DAYS = [
  { id: 0, title: "Monday", enabled: false },
  { id: 1, title: "Tuesday", enabled: false },
  { id: 2, title: "Wednesday", enabled: false },
  { id: 3, title: "Thursday", enabled: false },
  { id: 4, title: "Friday", enabled: false },
  { id: 5, title: "Saturday", enabled: false },
  { id: 6, title: "Sunday", enabled: false },
];

function ChangeDayStatus({ userProfile }) {
  const appState = useStoreState((state) => state.app);
  const appActions = useStoreActions((actions) => actions.app);
  const [unmount, setUnmount] = useState(false);
  const { displayModifyDayStatus } = appState;
  const { setDisplayModifyDayStatus } = appActions;
  const [userDefaultDays, setUserDefaultDays] = useState([]);
  const [days, setDays] = useState(DEFAULT_DAYS);

  const ref = useOnclickOutside(() => {
    if (displayModifyDayStatus) {
      handleClose();
    }
  });

  useEffect(() => {
    setUnmount(false);
  }, []);

  useEffect(() => {
    let defaultDays = userProfile.default_days;
    console.log(defaultDays);
    let days = DEFAULT_DAYS.map((day) => {
      if (defaultDays.includes(day.id)) {
        let updObj = { ...day, enabled: true };
        return updObj;
      } else {
        let updObj = { ...day, enabled: false };
        return updObj;
      }
    });
    setDays(days);
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

    setUnmount(false);
    if (displayModifyDayStatus) {
      setDisplayModifyDayStatus(false);
    }
  }

  function updateArr(id, updatedObj, added) {
    let updDays = days.map((d) => (d.id !== id ? d : updatedObj));
    setDays(updDays);
  }

  console.log(userProfile);

  function updateArr(id, updatedObj, added) {
    let updDays = days.map((d) => (d.id !== id ? d : updatedObj));
    console.log("upd", updDays);
    setDays(updDays);
  }

  async function saveUpdates() {
    console.log("DAYAYAYAYAYAY", days);
    const selectedDays = days
      .filter((d) => d.enabled)
      .map(function (d) {
        return d.id;
      });
    const updates = {
      id: userProfile.id,
      default_days: selectedDays,
    };

    console.log(days);

    let { data, error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal",
    });

    handleClose();
  }

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
            {days.map((day, i) => (
              <DayToggle
                key={i}
                id={i}
                day={day}
                enabled={day.enabled}
                updateArr={updateArr}
                disabledColor={"#514dec"}
                disabledColorText={"#fff"}
              />
            ))}
          </NewDatesItems>
        </NewDatesContainer>
        <InputButton
          text={"Save"}
          action={saveUpdates}
          backgroundColor={"#fff"}
          margin={"20px 0 0 10px"}
          color={"#131432"}
          hoverBackgroundColor={"#fff"}
        />
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
