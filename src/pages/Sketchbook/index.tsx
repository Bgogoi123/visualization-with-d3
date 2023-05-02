import * as d3 from "d3";
import { useEffect, useState } from "react";
import eraserCursor from "../../assets/icons/pointerIcons/eraserCursor.svg";
import pencilCursor from "../../assets/icons/pointerIcons/pencilCursor.svg";
import { SketchbookContext } from "../../context";
import { TBrushType, TDashBrushType } from "../../types";
import { redo, undo } from "./functions";
import { Line } from "./Line";
import "./styles.css";
import Tools from "./Tools";

const Sketchbook = () => {
  const [color, setColor] = useState<string>("#000");
  const [thickness, setThickness] = useState<number>(2);
  const [drawing, setDrawing] = useState<boolean>(false);
  const [lastStroke, setLastStroke] = useState<unknown>();
  const [svgElement, setSvgElement] = useState<string>("");
  const [removedPaths, setRemovedPaths] = useState<unknown[]>([]);
  const [drawingPaused, setDrawingPaused] = useState<boolean | "end">(false);
  const [dashBrushType, setDashBrushType] = useState<TDashBrushType>("5,10,5");

  const [currentLine, setCurrentLine] = useState<{
    thickness: number;
    points: [number, number][];
  }>({
    thickness,
    points: [],
  });

  const [brushType, setBrushType] = useState<TBrushType>({
    default: true,
    dash: false,
    eraser: false,
  });

  useEffect(() => {
    d3.select("svg").on("mousemove", (event) => {
      const [x, y] = d3.pointer(event);

      setCurrentLine((prev) => ({
        ...prev,
        points: [...prev.points, [x, y]],
      }));
    });
  }, []);

  useEffect(() => {
    //undo functionality
    const dAttribute = (lastStroke as SVGPathElement)?.getAttribute("d");
    setRemovedPaths((prev) => {
      let temp = [...prev, lastStroke];
      return temp;
    });
    let lastPath = d3.select(`path[d="${dAttribute}"]`);
    lastPath.remove();
  }, [lastStroke]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // undo
    if (event.ctrlKey && event.key === "z") {
      const area = d3.select("svg#drawable-area").selectAll("path");
      undo({
        area,
        setLastStroke,
      });
    }

    // redo
    if (event.ctrlKey && event.key === "y") {
      let svg = d3.select("#drawable-area");
      redo({
        svg,
        removedPaths,
      });
    }
  };

  return (
    <SketchbookContext.Provider
      value={{
        thickness,
        setThickness,
        brushType,
        setBrushType,
        dashBrushType,
        setDashBrushType,
        color,
        setColor,
        currentLine,
        setCurrentLine,
        svgElement,
        setSvgElement,
        removedPaths,
        setRemovedPaths,
        lastStroke,
        setLastStroke,
      }}
    >
      <Tools />
      <div
        id="sketchbook"
        className="drawableAreaContainer"
        style={
          brushType.eraser
            ? {
                cursor: `url(${eraserCursor}) 5 20, pointer`,
              }
            : {
                cursor: `url(${pencilCursor}) 5 20, pointer`,
              }
        }
        onMouseDown={() => {
          setDrawing(true);
          setDrawingPaused(true);
          setCurrentLine({ thickness, points: [] });
        }}
        onMouseUp={() => {
          setDrawing(false);
          setDrawingPaused("end");
          // setLines((lines) => [...lines, currentLine]);
        }}
        tabIndex={0}
        onKeyDown={(event) => onKeyDown(event)}
      >
        <svg
          height={900}
          style={{
            width: "100%",
          }}
          id="drawable-container"
        >
          <g id="path-group">
            <Line
              // points={currentLine.points}
              drawing={drawing}
              drawingPaused={drawingPaused}
              setDrawingPaused={setDrawingPaused}
            />
          </g>
        </svg>
      </div>
    </SketchbookContext.Provider>
  );
};

export default Sketchbook;
