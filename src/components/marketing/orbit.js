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

const PlutoOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 700px;
  height: 700px;
  animation: ${Spin} 14s linear 0s infinite;
`;

const Pluto = styled.div`
  position: absolute;
  top: -7px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
`;

const EarthOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 550px;
  height: 550px;
  animation: ${Spin} 12s linear 0s infinite;
`;

const Earth = styled.div`
  position: absolute;
  top: -7px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
`;

const VenusOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 400px;
  height: 400px;
  animation: ${Spin} 7.4s linear 0s infinite;
`;

const Venus = styled.div`
  position: absolute;
  top: -7px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffaa62;
  z-index: 0;
`;

const MercuryOrbit = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 500%;
  width: 250px;
  height: 250px;
  animation: ${Spin} 5s linear 0s infinite;
`;

const Mercury = styled.div`
  position: absolute;
  top: -7px;
  width: 10px;
  height: 10px;
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
        <PlutoOrbit>
          <Pluto />
          <EarthOrbit>
            <Earth />
            <VenusOrbit>
              <Venus />
              <MercuryOrbit>
                <Mercury />
              </MercuryOrbit>
            </VenusOrbit>
          </EarthOrbit>
        </PlutoOrbit>
      </OrbitInnerContainer>
      <LunadeskLogoContainer>
        <Logo />
      </LunadeskLogoContainer>
    </OrbitContainer>
  );
}

export default Orbit;
