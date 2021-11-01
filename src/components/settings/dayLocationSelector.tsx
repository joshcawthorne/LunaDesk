import { SetStateAction, useState } from "react";
import styled from "styled-components";

import Dropdown from "components/shared/dropdown";

import HomeIcon from "assets/svg/icons/home.svg";
import OfficeIcon from "assets/svg/icons/work.svg";
import OtherLocationIcon from "assets/svg/icons/location.svg";

const DayLocationSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LocationIconContainer = styled.div`
  margin-right: 2px;
`;

const LocationText = styled.div`
  line-height: 0;
`;

interface DayLocationSelector {
  dayUpdate: (day: Day) => void;
  day: Day
}


interface Day {
  id: number;
  state: number;
  prettyName: string;
  initial: string;
  startTime: string;
  endTime: string;
  location: any;
  arrLocation: number;
}

function DayLocationSelector({ dayUpdate, day }: DayLocationSelector) {
  const [selected, setSelected] = useState(0);
  const DropdownOptions = [
    {
      title: "Home",
      Icon: HomeIcon,
      value: "home",
    },
    {
      title: "Office",
      Icon: OfficeIcon,
      value: "office",
    },
    {
      title: "Other",
      Icon: OtherLocationIcon,
      value: "other",
    },
  ];

  function handleSelected(id: SetStateAction<number>, value: any) {
    const updatedDay = { ...day, location: id };
    setSelected(id);
    dayUpdate(updatedDay);
  }

  return (
    <DayLocationSelectorContainer>
      <Dropdown
        items={DropdownOptions}
        selected={selected}
        handleSelectChange={handleSelected}
        displayIconPreview={true}
        style={{ width: "120px" }}
      />
    </DayLocationSelectorContainer>
  );
}

export default DayLocationSelector;
