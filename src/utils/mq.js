import { css } from "styled-components";

import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XXS,
  CONTAINER_WIDTH,
  MOCKUP_WIDTH,
  OFFSET_SIDE,
} from "./constants";

function screenStyles(breakpoint) {
  return function (styles) {
    return css`
      @media (max-width: ${breakpoint}px) {
        ${styles};
      }
    `;
  };
}

const mq = {
  mobileSmall: screenStyles(BREAKPOINT_XXS),
  mobile: screenStyles(BREAKPOINT_SM),
  tablet: screenStyles(BREAKPOINT_MD),
  desktopSmall: screenStyles(BREAKPOINT_LG),
};

mq.desktopExtraLarge = (styles) => {
  return css`
    @media (min-width: ${MOCKUP_WIDTH}px) {
      ${styles};
    }
  `;
};

mq.desktopLarge = (styles) => {
  return css`
    @media (min-width: ${BREAKPOINT_LG}px) {
      ${styles};
    }
  `;
};

mq.containerWidth = (styles) => {
  return css`
    @media (max-width: ${CONTAINER_WIDTH + OFFSET_SIDE * 2}px) {
      ${styles};
    }
  `;
};

mq.maxWidth = (width) => (styles) => {
  return css`
    @media (max-width: ${width}px) {
      ${styles};
    }
  `;
};

mq.minHeight = (height) => (styles) => {
  return css`
    @media (min-height: ${height}px) {
      ${styles};
    }
  `;
};

export default mq;
