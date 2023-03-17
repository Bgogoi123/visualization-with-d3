import { createContext } from "react";
import { TBrushType, TDashBrushType } from "../types";

type TSketchbookContext = {
  thickness: number;
  setThickness: React.Dispatch<React.SetStateAction<number>>;
  brushType: TBrushType;
  setBrushType: React.Dispatch<React.SetStateAction<TBrushType>>;
  dashBrushType: TDashBrushType;
  setDashBrushType: React.Dispatch<React.SetStateAction<TDashBrushType>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  currentLine: {
    thickness: number;
    points: [number, number][];
  };
  setCurrentLine: React.Dispatch<
    React.SetStateAction<{
      thickness: number;
      points: [number, number][];
    }>
  >;
  svgElement: string;
  setSvgElement: React.Dispatch<React.SetStateAction<string>>;
};

export const SketchbookContext = createContext<TSketchbookContext>({
  thickness: 1,
  setThickness: () => {},
  brushType: {
    default: true,
    dash: false,
    eraser: false,
  },
  setBrushType: () => {},
  dashBrushType: "5,10,5",
  setDashBrushType: () => {},
  color: "#000",
  setColor: () => {},
  currentLine: {
    thickness: 1,
    points: [[0, 0]],
  },
  setCurrentLine: () => {},
  svgElement: "",
  setSvgElement: () => {},
});
