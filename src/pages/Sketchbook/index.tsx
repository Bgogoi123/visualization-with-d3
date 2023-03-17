import * as d3 from "d3";
import { useEffect, useState } from "react";
import eraserCursor from "../../assets/icons/pointerIcons/eraserCursor.svg";
import pencilCursor from "../../assets/icons/pointerIcons/pencilCursor.svg";
import { SketchbookContext } from "../../context";
import { TBrushType, TDashBrushType } from "../../types";
import { Line } from "./Line";
import "./styles.css";
import Tools from "./Tools";

const Sketchbook = () => {
  const [thickness, setThickness] = useState<number>(2);
  const [color, setColor] = useState<string>("#000");
  const [drawing, setDrawing] = useState<boolean>(false);
  const [drawingPaused, setDrawingPaused] = useState<boolean | "end">(false);
  const [svgElement, setSvgElement] = useState<string>("");

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

  const [dashBrushType, setDashBrushType] = useState<TDashBrushType>("5,10,5");

  useEffect(() => {
    d3.select("svg").on("mousemove", (event) => {
      const [x, y] = d3.pointer(event);

      setCurrentLine((prev) => ({
        ...prev,
        points: [...prev.points, [x, y]],
      }));
    });
  }, []);

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
          // setLines((lines) => [...lines, currentLine]);
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
