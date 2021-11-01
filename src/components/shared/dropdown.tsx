import { useState } from "react";
import styled from "styled-components";
import useOnclickOutside from "react-cool-onclickoutside";
import { motion } from "framer-motion";

import DropdownItem from "./dropdownItem"
import DropdownArrow from "assets/svg/dropdownArrow.svg";

interface Dropdown {
  items: Item[],
  selected: number,
  handleSelectChange: (id, value) => void,
  style?: React.CSSProperties,
  containerStyle?: React.CSSProperties,
  displayIconPreview?: boolean,
}

interface Item {
  title: string,
  value: string,
  Icon?: any,
}

const DropdownTriggerContainer = styled.div`
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const DropdownBox = styled.div`
  background-color: transparent;
  padding: 6px;
  border-radius: 5px;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3eff0;
  font-family: "Roobert", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 24px;
  font-size: 13px;
`;

const DropdownContainer = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  z-index: 1;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0px 5px;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const DropdownBoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const DropdownBoxArrow = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  box-sizing: border-box;
`;

const DropdownBoxIcon = styled.div`
  margin-right: 7.5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropboxLeftContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerAnim = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'unset',
    transition: {
      type: "tween"
    },
  },
};

function Dropdown({ items, selected, handleSelectChange, style, containerStyle, displayIconPreview }: Dropdown) {
  const [open, setOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const ref = useOnclickOutside(() => {
    if (open) { handleClose() }
  });

  function handleToggle() {
    if (open) {
      handleClose();
    } else {
      setOpen(true);
      setTransitioning(false);
    }
  }

  function handleClose() {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
      setOpen(false)
    }, 500);
  }

  function handleSelect(id, value) {
    handleSelectChange(id, value)
    handleClose();
  }

  return (
    <DropdownTriggerContainer
      ref={ref}
      style={{ ...style }}
    >
      <DropdownBox onClick={() => handleToggle()} style={{ ...containerStyle }}>
        <DropboxLeftContent>
          {displayIconPreview && items.slice(selected, selected + 1).map(({ Icon }, i) => (
            <DropdownBoxIcon key={i}><Icon stroke={"#000"} width={"20px"} strokeWidth={"1.5px"} /></DropdownBoxIcon>
          ))}


          <DropdownBoxText>{items[selected].title}</DropdownBoxText>
        </DropboxLeftContent>
        <DropdownBoxArrow><DropdownArrow width={"17px"} /></DropdownBoxArrow>
      </DropdownBox>
      {open && (
        <DropdownContainer initial="hidden"
          animate={transitioning ? "hidden" : open ? "show" : "hidden"}
          variants={ContainerAnim}>
          {items.map((item, i) => (
            <DropdownItem key={i} id={i} onSelect={handleSelect} title={item.title} Icon={item.Icon} value={item.value} selected={selected === i} />
          ))}
        </DropdownContainer>
      )}
    </DropdownTriggerContainer>
  );
}

export default Dropdown;
