import * as d3 from "d3";
import { useContext, useEffect, useMemo, useState } from "react";
import { SocketContext } from "../../components/SocketContainer";
import { SketchbookContext } from "../../context";
import { definePath, removeExtraPaths, updateSketchbook } from "./functions";

export const Line = ({
  points,
  drawing,
  drawingPaused,
  setDrawingPaused,
}: {
  points: [number, number][];
  drawing: boolean;
  drawingPaused: boolean | "end";
  setDrawingPaused: (value: React.SetStateAction<boolean | "end">) => void;
}) => {
  const { socket } = useContext(SocketContext);
  const {
    brushType,
    dashBrushType,
    color,
    thickness,
    svgElement,
    setSvgElement,
  } = useContext(SketchbookContext);
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
    let svg = d3.select("#drawable-area");

    if (drawing) {
      definePath({
        svg,
        color,
        thisLine,
        brushType,
        newPoints,
        thickness,
        dashBrushType,
      });
    }

    if (drawingPaused === "end") {
      const area: any = d3.select("svg#drawable-area").selectAll("path");
      Array.from(area).forEach(function (element) {
        setMainPath(element);
        setEnableRemove(true);
        d3.selectAll("path#drawable-path").remove();
      });

      setDrawingPaused(false);
    }
  }, [points]);

  useEffect(() => {
    let svg = d3.select("#drawable-area");

    if (enableRemove) {
      removeExtraPaths({
        svg,
        color,
        mainPath,
        brushType,
        thickness,
        dashBrushType,
      });

      // send the svg data to backend
      socket.emit(
        "data",
        new XMLSerializer().serializeToString(
          document.getElementById("drawable-area") as Node
        )
      );

      setEnableRemove(false);
    }
  }, [enableRemove]);

  // read svg data from backend
  socket?.on("svgDataLoaded", (svgData: any) => {
    setSvgElement(svgData);
  });

  // clear all screens
  socket?.on("clearAll", (clearData: boolean) => {
    if (clearData) {
      const svg = d3.select("svg#drawable-area");
      svg.selectAll("*").remove();
    }
  });

  useEffect(() => {
    const container = d3.select("#path-group"); //<g>
    const oldArea = d3.select("#drawable-area"); //<svg>
    updateSketchbook({
      svgElement,
      oldArea,
      container,
    });
  }, [svgElement]);

  return <svg id="drawable-area"></svg>;
};
