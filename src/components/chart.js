import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const uPlot = dynamic(() => import("uplot"), {
  ssr: false,
});

const UplotReact = dynamic(() => import("uplot-react"), {
  ssr: false,
});

const ChartContainer = styled.div`
  color: #fff;
`;

const StyledUplotReact = styled(UplotReact)``;

function Chart() {
  return (
    <ChartContainer>
      <StyledUplotReact
        options={{
          title: "Chart",
          width: 400,
          height: 300,
          stroke: "white",
          fill: "white",
          color: "white",
          text: "white",
          label: "white",
        }}
        data={[
          [...new Array(100000)].map((_, i) => i),
          [...new Array(100000)].map((_, i) => i % 1000),
        ]}
      />
    </ChartContainer>
  );
}

export default Chart;
