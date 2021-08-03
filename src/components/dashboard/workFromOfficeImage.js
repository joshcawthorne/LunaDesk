import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TodayStateImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TodayStateImageContainerInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const WorkFromOfficeImageOne = styled(motion.img)`
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: -5px;
  margin-right: 0px;
  opacity: 1;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const WorkFromOfficeImageTwo = styled(motion.img)`
  width: 25px;
  height: auto;
  object-fit: contain;
  margin-bottom: 35px;
  margin-right: 10px;
  opacity: 1;
  position: absolute;
  bottom: 150px;
  right: 10px;
`;

const WorkFromOfficeImageThree = styled(motion.img)`
  width: 45px;
  height: auto;
  object-fit: contain;
  margin-bottom: 0px;
  margin-right: 0px;
  opacity: 1;
  position: absolute;
  bottom: 170px;
  right: 80px;
`;

const WorkFromOfficeImageFour = styled(motion.img)`
  width: 25px;
  height: auto;
  object-fit: contain;
  margin-bottom: -50px;
  margin-right: 130px;
  opacity: 1;
  position: absolute;
  bottom: 200px;
  right: 30px;
`;

function WorkFromOfficeImage() {
  return (
    <TodayStateImageContainer>
      <TodayStateImageContainerInner>
        <WorkFromOfficeImageOne
          src={"/images/workFromOffice.png"}
          alt={"Working from Home"}
        />
        <WorkFromOfficeImageTwo
          src={"/images/workFromOfficeBulb.png"}
          alt={"Working from Home"}
          animate={{
            y: [4, -2, 1, -2, 4, -2, 4],
            rotate: [30, 35, 25, 30, 40, 20, 30],
          }}
          transition={{
            duration: 15,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
        <WorkFromOfficeImageThree
          src={"/images/workFromOfficeBooks.png"}
          alt={"Working from Home"}
          animate={{
            y: [2, -3, 5, -1, 3, -1, 4],
            rotate: [0, -30, 20, 0, -10, 30, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
        <WorkFromOfficeImageFour
          src={"/images/workFromOfficeCube.png"}
          alt={"Working from Home"}
          animate={{
            y: [5, -1, 4, 0, 2, -1, 5],
            rotate: [0, 30, -80, 0, 100, -30, 0],
          }}
          transition={{
            duration: 21,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
      </TodayStateImageContainerInner>
    </TodayStateImageContainer>
  );
}

export default WorkFromOfficeImage;
