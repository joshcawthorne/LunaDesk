import React from "react";
import styled, { keyframes } from "styled-components";

import Logo from "../../../assets/svg/moonLogo.svg";

const Spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`;

const OrbitContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrbitInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EarthOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: ${Spin} 12s linear 0s infinite;
`;

const Earth = styled.div`
  position: absolute;
  top: -10.5px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
`;

const VenusOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 75%;
  height: 75%;
  animation: ${Spin} 7.4s linear 0s infinite;
`;

const Venus = styled.div`
  position: absolute;
  top: -10.5px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
`;

const MercuryOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 62%;
  height: 62%;
  animation: ${Spin} 5s linear 0s infinite;
`;

const Mercury = styled.div`
  position: absolute;
  top: -10.5px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
  animation: ${Spin} 5s linear 0s infinite;
`;

const LunadeskLogoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.7);
`;

function Orbit() {
  return (
    <OrbitContainer>
      <OrbitInnerContainer>
        <EarthOrbit>
          <Earth />
          <VenusOrbit>
            <Venus />
            <MercuryOrbit>
              <Mercury />
            </MercuryOrbit>
          </VenusOrbit>
        </EarthOrbit>
      </OrbitInnerContainer>
      <LunadeskLogoContainer>
        <Logo />
      </LunadeskLogoContainer>
    </OrbitContainer>
  );
}

export default Orbit;
