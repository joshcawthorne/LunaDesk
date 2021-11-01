import { useEffect, useState } from 'react'
import styled, { ThemeContext } from "styled-components";
import { motion } from "framer-motion";
import { Gradient } from "whatamesh";

const CanvasContainerOuter = styled.div`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.gradientPlaceholder};
`;

const CanvasContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.gradientPlaceholder};
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: ${(props) => props.theme.gradientColor1};
    --gradient-color-2: ${(props) => props.theme.gradientColor2};
    --gradient-color-3: ${(props) => props.theme.gradientColor3};
    --gradient-color-4: ${(props) => props.theme.gradientColor4};
  }
`;

const InitialContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.gradientPlaceholder};
`;

const variants = {
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 },
};

function BackgroundAnimation({ theme }) {
    const [canvasReady, setCanvasReady] = useState(false);
    const [rerender, setRerender] = useState(false);
    const batterySaver = true;

    useEffect(() => {
        setCanvasReady(false);
        setRerender(true);
        setTimeout(() => {

            setRerender(false);

            const gradient = new Gradient();
            gradient.initGradient("#gradient-canvas");
            setTimeout(() => {
                setCanvasReady(true);
            }, 400);

        }, 10);
    }, [theme]);


    if (rerender) {
        return <InitialContainer />
    }

    return (
        <CanvasContainerOuter>
            <CanvasContainer
                initial="hidden"
                animate={canvasReady ? "visible" : "hidden"}
                variants={variants}

            >
                <canvas id="gradient-canvas" data-transition-in />
            </CanvasContainer>
        </CanvasContainerOuter>
    )
}

export default BackgroundAnimation
