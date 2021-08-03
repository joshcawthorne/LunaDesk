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

const WorkFromHomeImageOne = styled(motion.img)`
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  margin-right: 10px;
  opacity: 1;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const WorkFromHomeImageTwo = styled(motion.img)`
  width: 35px;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  margin-right: 10px;
  opacity: 1;
  position: absolute;
  bottom: 150px;
  right: 10px;
`;

const WorkFromHomeImageThree = styled(motion.img)`
  width: 40px;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  margin-right: 10px;
  opacity: 1;
  position: absolute;
  bottom: 160px;
  right: 150px;
`;

const WorkFromHomeImageFour = styled(motion.img)`
  width: 40px;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  margin-right: 10px;
  opacity: 1;
  position: absolute;
  bottom: 200px;
  right: 30px;
`;

function WorkFromHomeImage() {
  return (
    <TodayStateImageContainer>
      <TodayStateImageContainerInner>
        <WorkFromHomeImageOne
          src={"/images/workFromHome.png"}
          alt={"Working from Home"}
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            duration: 5,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
        <WorkFromHomeImageTwo
          src={"/images/workFromHomeCube.png"}
          alt={"Working from Home"}
          animate={{
            y: [2, -2, 3, 1, 4, -2, 2],
            rotate: [0, 30, -40, 0, 20, -10, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
        <WorkFromHomeImageThree
          src={"/images/workFromHomeCube2.png"}
          alt={"Working from Home"}
          animate={{
            y: [2, -3, 5, -1, 3, -1, 4],
            rotate: [0, -50, 20, 0, -60, 30, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
        <WorkFromHomeImageFour
          src={"/images/workFromHomeSmile.png"}
          alt={"Working from Home"}
          animate={{
            y: [5, -1, 4, 0, 2, -1, 5],
            rotate: [0, 10, -80, 0, 40, -30, 0],
          }}
          transition={{
            duration: 25,
            ease: "easeOut",
            loop: Infinity,
          }}
        />
      </TodayStateImageContainerInner>
    </TodayStateImageContainer>
  );
}

export default WorkFromHomeImage;
