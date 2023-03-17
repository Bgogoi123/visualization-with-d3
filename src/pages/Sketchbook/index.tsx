import * as d3 from "d3";
import { useContext, useEffect, useState } from "react";
import { SketchbookContext } from "../../context";
import { TBrushType, TDashBrushType } from "../../types";
import { Line } from "./Line";
import Tools from "./Tools";
import "./styles.css";
import pencilCursor from "../../assets/icons/pointerIcons/pencilCursor.svg";
import eraserCursor from "../../assets/icons/pointerIcons/eraserCursor.svg";

const Sketchbook = () => {
  // const [thickness, setThickness] = useState<number>(2);
  const [color, setColor] = useState<string>("#000");
  const [drawing, setDrawing] = useState<boolean>(false);
  const [drawingPaused, setDrawingPaused] = useState<boolean | "end">(false);
  const [svgElement, setSvgElement] = useState<string>("");
  const [thickness, setThickness] = useState<number>(1);

  const [currentLine, setCurrentLine] = useState<{
    thickness: number;
    points: { x: number; y: number }[];
  }>({
    thickness,
    points: [],
  });
  const [lines, setLines] = useState<
    {
      thickness: number;
      points: {
        x: number;
        y: number;
      }[];
    }[]
  >([]);

  const [brushType, setBrushType] = useState<TBrushType>({
    default: true,
    dash: false,
    eraser: false,
  });

  const [dashBrushType, setDashBrushType] = useState<TDashBrushType>("5,10,5");

  useEffect(() => {
    d3.select("svg").on("mousemove", (event) => {
      const [x, y] = d3.pointer(event);

      setCurrentLine((prev) => ({
        ...prev,
        points: [...prev.points, { x, y }],
      }));
    });
  }, []);

  const newPoints0: [number, number][] = [];
  currentLine.points.forEach((pt) => {
    newPoints0.push([pt.x, pt.y]);
  });

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
        svgElement,
        setSvgElement,
      }}
    >
      <Tools />
      <div
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
          setLines((lines) => [...lines, currentLine]);
        }}
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
              points={newPoints0}
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
