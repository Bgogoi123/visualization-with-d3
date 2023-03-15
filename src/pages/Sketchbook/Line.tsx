import { useContext, useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";
import { SketchbookContext } from "../../context";
import { ERASER_COLOR } from "../../constants";

export const Line = ({
  thickness,
  points,
  drawing,
}: {
  thickness: number;
  points: [number, number][];
  drawing: boolean;
}) => {
  const drawableAreaRef = useRef(null);
  const { brushType, dashBrushType, color } = useContext(SketchbookContext);

  const newPoints: [number, number][] = [];
  points.forEach((pt) => {
    newPoints.push([pt[0], pt[1]]);
  });

  const thisLine = useMemo(() => {
    return d3
      .line()
      .x((d) => d[0])
      .y((d) => d[1])
      .curve(d3.curveBasisOpen);
  }, []);

  useEffect(() => {
    if (drawing) {
      let svg = d3.select(drawableAreaRef.current!);

      if (brushType.eraser) {
        svg
          .append("path")
          .datum(newPoints)
          .attr("d", thisLine)
          .attr("stroke", ERASER_COLOR)
          .attr("stroke-width", thickness)
          .attr("stroke-linecap", "butt")
          .attr("fill", "none");
      }

      if (brushType.default) {
        svg
          .append("path")
          .datum(newPoints)
          .attr("d", thisLine)
          .attr("stroke", color)
          .attr("stroke-width", thickness)
          // .attr("`stroke-linejoin`", "miter")
          .attr("stroke-linecap", "butt")
          .attr("fill", "none");
      }

      if (brushType.dash) {
        svg
          .append("path")
          .datum(newPoints)
          .attr("d", thisLine)
          .attr("stroke", color)
          .attr("stroke-width", thickness)
          // .attr("`stroke-linejoin`", "miter")
          .attr("stroke-linecap", "butt")
          .attr("stroke-dasharray", dashBrushType)
          .attr("fill", "none");
      }
    }
  }, [points]);

  return (
    <svg ref={drawableAreaRef} id="drawable-area"></svg>
    // <path
    //   // d={line(points)}
    //   // d={line(newPoints)}
    //   // d={line(newPoints)}
    //   style={{
    //     stroke: "black",
    //     strokeWidth: thickness,
    //     strokeLinejoin: "round",
    //     strokeLinecap: "round",
    //     fill: "none",
    //   }}
    // />
  );
};
