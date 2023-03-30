import * as d3 from "d3";
import { useEffect, useState } from "react";

const TrialPage = () => {
  const [enableArc, setEnableArc] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    }

    return window.addEventListener("mousemove", (e) => handleMouseMove(e));
  }, []);

  if (enableArc) {
    // draw line
    // d3.select("svg")
    //   .selectAll("g")
    //   .each(function () {
    //     d3.select(this)
    //       .append("line")
    //       .attr("r", "0.1px")
    //       .attr("fill", "black")
    //       .attr("cx", mousePos.x - 315)
    //       .attr("cy", mousePos.y - 85)
    //       .attr("stroke", "black")
    //       .attr("strokeWidth", "10px");
    //   });
    // draw dots
    d3.select("svg")
      .selectAll("g")
      .each(function () {
        d3.select(this)
          .append("circle")
          .attr("r", "0.1px")
          .attr("fill", "black")
          .attr("cx", mousePos.x - 315)
          .attr("cy", mousePos.y - 85)
          .attr("stroke", "black")
          .attr("strokeWidth", "10px");
      });
  }

  return (
    <div
      style={{ backgroundColor: "lightgrey" }}
      onMouseDown={() => setEnableArc(true)}
      onMouseUp={() => setEnableArc(false)}
    >
      <svg
        height={900}
        style={{
          width: "100%",
        }}
      >
        <g>
          {/* <line
            x1="0"
            y1="0"
            x2="200"
            y2="200"
            style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }}
          />
          <path
            d="M 100 350 q 150 -300 300 0"
            stroke="blue"
            stroke-width="5"
            fill="none"
          /> */}
        </g>
      </svg>
    </div>
  );
};

export default TrialPage;
