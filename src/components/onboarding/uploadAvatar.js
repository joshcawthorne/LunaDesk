import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { supabase } from "src/services/supabaseClient";
import ProfilePictureUpload from "src/components/profilePictureUpload";

import StarOne from "src/assets/svg/starOne.svg";
import StarTwo from "src/assets/svg/starTwo.svg";
import StarThree from "src/assets/svg/starThree.svg";
import StarFour from "src/assets/svg/starFour.svg";
import LunaDeskLogo from "src/assets/svg/logoCollapsed.svg";

const InputProfilePictureItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 20px 0;
`;

const ProfilePictureContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border-width: 2.5x;
  border-style: solid;
  background-color: #0d1afc;
  border-color: #0d1afc;
  position: relative;
  z-index: 2;
  user-select: none;
`;

const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 42px;
  font-weight: 600;
  color: #fff;
  z-index: 2;
`;

const UserProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 2;
`;

const UserProfileText = styled.div`
  font-size: 13px;
  text-align: center;
  font-weight: 500;
  opacity: 0.6;
  margin-top: 5px;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const StarsInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
`;

const StarOneContainer = styled(motion.div)`
  position: absolute;
  top: -5px;
  left: -25px;
  z-index: 0;
`;
const StarTwoContainer = styled(motion.div)`
  position: absolute;
  top: -20px;
  right: -5px;
`;
const StarThreeContainer = styled(motion.div)`
  position: absolute;
  bottom: -3px;
  left: -15px;
`;
const StarFourContainer = styled(motion.div)`
  position: absolute;
  bottom: 5px;
  right: -35px;
`;

const StarFiveContainer = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: -30px;
  transform: rotate(10deg);
`;

const StarSixContainer = styled(motion.div)`
  position: absolute;
  top: 24px;
  right: -30px;
`;

const ProfilePictureAnim = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const profileAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { delay: 0.2 },
  },
};

const starOneAnim = {
  hidden: { opacity: 0, x: 10, y: 5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "6deg",
    transition: { delay: 0 },
  },
};

const starTwoAnim = {
  hidden: { opacity: 0, x: -15, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-6deg",
    transition: { delay: 0.02 },
  },
};

const starThreeAnim = {
  hidden: { opacity: 0, x: 20, y: -10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-20deg",
    transition: { delay: 0.04 },
  },
};

const starFourAnim = {
  hidden: { opacity: 0, x: -15, y: -5 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "8deg",
    transition: { delay: 0.03 },
  },
};

const starFiveAnim = {
  hidden: { opacity: 0, x: 10, y: 10, rotate: "-30deg" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "-10deg",
    transition: { delay: 0.03 },
  },
};

const starSixAnim = {
  hidden: { opacity: 0, x: -25, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: "20deg",
    transition: { delay: 0.05 },
  },
};

function UploadAvatar({
  hasInitials,
  initials,
  setAvatarUrl,
  displayAvatar,
  avatarSrc,
  targetBucket,
}) {
  const [loading, setLoading] = useState(false);
  const [userHasProfilePicture, setUserHasProfilePicture] = useState(false);
  const [runAnim, setRunAnim] = useState(false);

  return (
    <InputProfilePictureItem>
      <ProfilePictureContainer>
        <ProfilePictureUpload
          userHasProfilePicture={userHasProfilePicture}
          setUserHasProfilePicture={setUserHasProfilePicture}
          targetBucket={targetBucket}
          onUpload={(url) => {
            setAvatarUrl(url);
            console.log(url);
            setUserHasProfilePicture(true);
          }}
        />
        {displayAvatar ? (
          <>
            <ProfilePictureAnim
              initial="hidden"
              animate={runAnim ? "visible" : "hidden"}
              variants={profileAnim}
            >
              <UserProfileImage
                src={avatarSrc}
                onLoad={() => setRunAnim(true)}
              />
            </ProfilePictureAnim>

            <StarsContainer>
              <StarsInnerContainer>
                <StarOneContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starOneAnim}
                >
                  <StarOne fill={"#ffaa61"} />
                </StarOneContainer>
                <StarTwoContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starTwoAnim}
                >
                  <StarTwo fill={"#0d1afc"} />
                </StarTwoContainer>
                <StarThreeContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starThreeAnim}
                >
                  <StarThree fill={"#0d1afc"} />
                </StarThreeContainer>
                <StarFourContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starFourAnim}
                >
                  <StarOne fill={"#0d1afc"} />
                </StarFourContainer>
                <StarFiveContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starFiveAnim}
                >
                  <StarTwo fill={"#ffaa61"} />
                </StarFiveContainer>

                <StarSixContainer
                  initial="hidden"
                  animate={runAnim ? "visible" : "hidden"}
                  variants={starSixAnim}
                >
                  <StarThree fill={"#ffaa61"} />
                </StarSixContainer>
              </StarsInnerContainer>
            </StarsContainer>
          </>
        ) : (
          <ProfilePicture>
            {hasInitials ? (
              <div>{initials}</div>
            ) : (
              <LunaDeskLogo fill={"#fff"} width={"40px"} />
            )}
          </ProfilePicture>
        )}
      </ProfilePictureContainer>
    </InputProfilePictureItem>
  );
}

export default UploadAvatar;
