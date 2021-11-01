import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LoadingIcon({ width = "60px" }) {
  let go = true;
  return (
    <Container width={width}>
      <motion.svg
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 41 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.linearGradient id="myGradient">
          <stop offset="0%" stopColor="#E523BB" />
          <stop offset="100%" stopColor="#F8B84F" />
        </motion.linearGradient>
        <motion.path
          stroke="url(#myGradient)"
          strokeWidth="2"
          d="M17.7295 1.78192C32.3146 4.4785 41.9914 18.6392 39.3245 33.4221C37.3032 44.6266 28.7715 52.9601 18.4091 55.1604C24.1732 51.0075 28.4055 44.6649 29.7764 37.0661C32.5679 21.5925 22.4409 6.74597 7.1383 3.91672C5.58901 3.63028 4.04575 3.47805 2.52032 3.452C7.1627 1.47562 12.4053 0.797555 17.7295 1.78192Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.3,
          }}
        />
      </motion.svg>
      {/*}
      <Below>
        <LogoAnimContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.4,
            delay: 0.4,
          }}
        >
          <Logo />
        </LogoAnimContainer>
      </Below>
        */}
    </Container>
  );
}

export default LoadingIcon;
