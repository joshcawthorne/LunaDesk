import { useState } from "react";
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

function DayLocationSelector({ }) {
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

  function handleSelected(id, value) {
    console.log(id);
    setSelected(id);
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
