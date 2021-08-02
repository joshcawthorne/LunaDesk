import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

import Logo from "../../../assets/svg/loadingLogo.svg";

const FlameOdd = keyframes`
    0%, 100% {
       width:0%;
       height:0%;
    }
    25% {
       width:100%;
       height:100%;
    }
    0% {
       background-color:#ffdc01;
       
    }
    40% {
       background-color:#fdac01;
       
    }
    100% {
       background-color:#f73b01;
       z-index:-10;
    }
    0% {
       right:0%;
       bottom:0%;
    }
    25% {
       right:1%;
       bottom:2%;
    }
    100% {
       right:150%;
       bottom:170%;
    }
 `;

const FlameOdder = keyframes`
0%, 100% {
   width:0%;
   height:0%;
}
25% {
   width:100%;
   height:100%;
}
0% {
   background-color:#ffdc01;
   
}
40% {
   background-color:#fdac01;
   
}
100% {
   background-color:#f73b01;
   z-index:-10;
}
0% {
   right:0%;
   bottom:0%;
}
25% {
   right:5%;
   bottom:4%;
}
100% {
   right:250%;
   bottom:270%;
}
`;

const FlameEven = keyframes`
    0%, 100% {
       width:0%;
       height:0%;
    }
    25% {
       width:100%;
       height:100%;
    }
    0% {
       background-color:#ffdc01;
    }
    40% {
       background-color:#fdac01;
    }
    100% {
       background-color:#f73b01;
       z-index:-10;
    }
    0% {
       right:0%;
       bottom:0%;
    }
    25% {
       right:2%;
       bottom:1%;
    }
    100% {
       right:170%;
       bottom:150%;
    }
 `;

const FlameEvener = keyframes`
0%, 100% {
   width:0%;
   height:0%;
}
25% {
   width:100%;
   height:100%;
}
0% {
   background-color:#ffdc01;
}
40% {
   background-color:#fdac01;
}
100% {
   background-color:#f73b01;
   z-index:-10;
}
0% {
   right:0%;
   bottom:0%;
}
25% {
   right:4%;
   bottom:2%;
}
100% {
   right:270%;
   bottom:250%;
}
`;

const Spin = keyframes`
  100% { 
    transform: rotateZ(360deg);
  }
`;

const Shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, -2px, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 1px, 0);
  }
`;

const LoadingContainer = styled(motion.div)`
  transform: scale(${(props) => props.scale});
  width: ${(props) => props.width};
`;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  flex-direction: column;
`;

const OuterWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  border-radius: 50%;
  border-style: dashed;
  border-width: 5px;
  box-sizing: border-box;
  border-color: #04035a;
  background-clip: content-box;
  ${(props) =>
    props.animate &&
    props.ring &&
    css`
      animation: ${Spin} 10s linear infinite;
    `}
`;

const InnerContainer = styled(motion.div)`
  height: 90%;
  position: relative;
  background-color: #04035a;
  border-radius: 50%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  z-index: 5;
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 5;
`;

const LogoContainer = styled.div`
  z-index: 5;
  ${(props) =>
    props.animate &&
    css`
      animation: ${Shake} 2s linear infinite;
    `}
`;

const Fire = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  margin-top: 80px;
  transform: rotate(180deg);
`;

const Flames = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  width: 25%;
  height: 25%;
  //background-color: #f73b01;
  transform: translateX(-50%) rotate(45deg);
`;

const Flame = styled.div`
  position: absolute;
  right: 0%;
  bottom: 0%;
  width: 0%;
  height: 0%;
  background-color: $yellow;
  border-radius: 1vw;
  ${(props) =>
    props.animate === true &&
    css`
      &:nth-child(2n + 1) {
        animation: ${FlameOdd} 0.8s ease-in infinite;
      }
      &:nth-child(2n) {
        animation: ${FlameEven} 0.8s ease-in infinite;
      }
      &:nth-child(2n + 3) {
        animation: ${FlameOdder} 0.8s ease-in infinite;
      }
      &:nth-child(2n + 4) {
        animation: ${FlameEvener} 0.8s ease-in infinite;
      }
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        animation-delay: 0.7;
      }
      &:nth-child(4) {
        animation-delay: 1;
      }
    `}
`;

const ContainerIntroAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.4,
    },
  },
};

const RocketIntroAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      type: "tween",
      delay: 0.8,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function LoadingIcon({ scale, width, animate, ring, intro }) {
  const n = 22;

  const [ringActive, setRingActive] = useState(false);

  useEffect(() => {
    if (intro) {
      if (ring) {
        setTimeout(() => {
          setRingActive(true);
        }, 1400);
      }
    } else if (ring) {
      setRingActive(true);
    }
  }, []);

  return (
    <LoadingContainer
      scale={scale ? scale : 0.5}
      width={width ? width : "180px"}
      variants={ContainerIntroAnim}
      initial={intro ? "hidden" : "show"}
      animate={"show"}
    >
      <Container>
        <OuterWraper ring={ringActive} animate={animate} />
        <InnerContainer>
          <ContentContainer
            variants={RocketIntroAnim}
            initial={intro ? "hidden" : "show"}
            animate={"show"}
          >
            <LogoContainer animate={animate ? true : false}>
              <Logo />
            </LogoContainer>

            <Fire>
              <Flames>
                {[...Array(n)].map((d, i) => (
                  <Flame key={i} animate={animate ? true : false} />
                ))}
              </Flames>
            </Fire>
          </ContentContainer>
        </InnerContainer>
      </Container>
    </LoadingContainer>
  );
}

export default LoadingIcon;
