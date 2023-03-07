import { arc } from "d3";
import "./styles.css";

const Smile = () => {
  const width = 400;
  const height = 400;

  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 1.5;
  const strokeColor = "#d6d6d6";

  const eyeCenterX = 30;
  const eyeCenterY = 10;

  const smileInnerRadius = 35;
  const smileStartAngle = 2;
  const smileEndAngle = 4.3;

  const smileArc: any = arc()
    .innerRadius(smileInnerRadius)
    .outerRadius(smileInnerRadius - 2)
    .startAngle(smileStartAngle)
    .endAngle(smileEndAngle);

  return (
    <div className="container">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            fill="whitesmoke"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            r={50}
          />
          <circle
            fill="silver"
            strokeWidth={1}
            r={7}
            cx={-eyeCenterX}
            cy={-eyeCenterY}
          />
          <circle
            fill="silver"
            strokeWidth={1}
            r={7}
            cx={eyeCenterX}
            cy={-eyeCenterY}
          />
          <path d={smileArc()} fill="pink" />
        </g>
      </svg>
    </div>
  );
};

export default Smile;
