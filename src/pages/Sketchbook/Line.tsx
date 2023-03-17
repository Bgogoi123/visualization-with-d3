import { useContext, useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { SketchbookContext } from "../../context";
import { ERASER_COLOR } from "../../constants";
import { io } from "socket.io-client";
// import { fetchSVG, socket, submitSVG } from "../../socket";
import { Button } from "@mantine/core";
import { SocketContext } from "../../components/SocketContainer";
import { ValueFn } from "d3";

export const Line = ({
  thickness,
  points,
  drawing,
  drawingPaused,
  setDrawingPaused,
}: {
  thickness: number;
  points: [number, number][];
  drawing: boolean;
  drawingPaused: boolean | "end";
  setDrawingPaused: (value: React.SetStateAction<boolean | "end">) => void;
}) => {
  const drawableAreaRef = useRef<any>(null);
  const { socket } = useContext(SocketContext);
  const { brushType, dashBrushType, color, svgElement, setSvgElement } =
    useContext(SketchbookContext);
  const [mainPath, setMainPath] = useState<unknown>();
  const [enableRemove, setEnableRemove] = useState<boolean>(false);

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
    let svg = d3.select(drawableAreaRef.current!);

    if (drawing) {
      if (brushType.eraser) {
        svg
          .append("path")
          .datum(newPoints)
          .attr("id", "drawable-path")
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
          .attr("id", "drawable-path")
          .attr("d", thisLine)
          .attr("stroke", color)
          .attr("stroke-width", thickness)
          .attr("stroke-linecap", "butt")
          .attr("fill", "none");
      }

      if (brushType.dash) {
        svg
          .append("path")
          .datum(newPoints)
          .attr("id", "drawable-path")
          .attr("d", thisLine)
          .attr("stroke", color)
          .attr("stroke-width", thickness)
          .attr("stroke-linecap", "butt")
          .attr("stroke-dasharray", dashBrushType)
          .attr("fill", "none");
      }
    }

    if (drawingPaused === "end") {
      const area: any = d3.select("svg#drawable-area").selectAll("path");
      Array.from(area).forEach(function (element) {
        setMainPath(element);
        setEnableRemove(true);
        d3.selectAll("path#drawable-path").remove();
      });

      // console.log("removing....", mainPath);
      // svg.remove();
      // const group = d3.select("#path-group");
      // group
      //   .append("svg")
      //   .attr("id", "drawable-area")
      //   .append("g")
      //   .html(mainPath as string);

      // socket.emit(
      //   "data",
      //   new XMLSerializer().serializeToString(drawableAreaRef.current)
      // );

      // submitSVG(drawableAreaRef.current as Node, setSvgElement);
      setDrawingPaused(false);
    }
  }, [points]);

  useEffect(() => {
    let svg = d3.select(drawableAreaRef.current!);
    if (enableRemove) {
      svg
        .append("path")
        .attr("d", (mainPath as SVGPathElement).getAttribute("d"))
        .attr("stroke", brushType.eraser ? ERASER_COLOR : color)
        .attr("stroke-width", thickness)
        .attr("stroke-linecap", "butt")
        .attr("stroke-dasharray", brushType.default ? "0" : dashBrushType)
        .attr("fill", "none");

      socket.emit(
        "data",
        new XMLSerializer().serializeToString(drawableAreaRef.current)
      );

      setEnableRemove(false);
    }
  }, [enableRemove]);

  socket?.on("svgDataLoaded", (svgData: any) => {
    // console.log("fetched: ", svgData);
    setSvgElement(svgData);
    // setSvgElement(svgElement + svgData);
  });

  useEffect(() => {
    if (svgElement !== undefined && svgElement !== "") {
      console.log(`replacing with -->${svgElement}<-- `);

      const container = d3.select("#path-group");
      const oldArea = d3.select("#drawable-area");

      // oldArea.remove();
      // container.append("svg").html(svgElement);
      // container
      //   .append("svg")
      //   .attr("id", "drawable-area")
      //   .attr("ref", drawableAreaRef as any);

      // const container = d3.select("#drawable-container");
      // const area = d3.select("#drawable-area");
      // area.remove();
      // // container.append(svgElement)
      // container.append("g").html(svgElement);
    }
  }, [svgElement]);

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
