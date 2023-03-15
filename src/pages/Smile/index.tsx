import * as d3 from "d3";
import { arc } from "d3";
import { useEffect, useState } from "react";
import "./styles.css";

const Smile = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   function handleMouseMove(event: MouseEvent) {
  //     setMousePos({
  //       x: event.clientX,
  //       y: event.clientY,
  //     });
  //   }

  //   return window.addEventListener("mousemove", (e) => handleMouseMove(e));
  // }, []);

  useEffect(() => {
    const mySvg = d3.select("svg");
    mySvg.on("mousemove", function (event) {
      var coordinates = d3.pointer(event);
      setMousePos({ x: coordinates[0], y: coordinates[1] });
    });
  }, []);

  const width = 400;
  const height = 900;

  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 1.5;
  const strokeColor = "#d6d6d6";

  const eyeCenterX = 10;
  const eyeCenterY = 5;
  const eyeRadius = 4;

  const smileInnerRadius = 15;
  const smileStartAngle = 2;
  const smileEndAngle = 4.3;

  const smileArc: any = arc()
    .innerRadius(smileInnerRadius)
    .outerRadius(smileInnerRadius - 2)
    .startAngle(smileStartAngle)
    .endAngle(smileEndAngle);

  // d3.select("svg")
  //   .selectAll("g")
  //   .each(function () {
  // d3.select(this)
  //   .append("rect")
  //   .attr("width", "100px")
  //   .attr("height", "100px")
  //   .attr("x", mousePos.x)
  //   .attr("y", mousePos.y)
  //   .style("fill", "transparent")
  //   .style("stroke", "black");
  // ------------ circles
  // d3.select(this)
  //   .append("circle")
  //   .attr("r", "50px")
  //   .attr("fill", "whitesmoke")
  //   .attr("cx", mousePos.x)
  //   .attr("cy", mousePos.y)
  //   .attr("stroke", "red")
  //   .attr("strokeWidth", "20px");
  // });

  return (
    <div className="container">
      <svg
        height={height}
        style={{
          width: "100%",
        }}
      >
        <g transform={`translate(${mousePos.x}, ${mousePos.y})`}>
          <circle
            fill="rgb(255, 251, 145)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            r={25}
          />
          <circle
            fill="black"
            strokeWidth={1}
            r={eyeRadius}
            cx={-eyeCenterX}
            cy={-eyeCenterY}
          />
          <circle
            fill="black"
            strokeWidth={1}
            r={eyeRadius}
            cx={eyeCenterX}
            cy={-eyeCenterY}
          />
          <path d={smileArc()} fill="rgb(254, 81, 139)" />
        </g>
      </svg>
    </div>
  );
};

export default Smile;
