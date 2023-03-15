import { createContext } from "react";
import { TBrushType, TDashBrushType } from "../types";

type TSketchbookContext = {
  thickness: number;
  setThickness: React.Dispatch<React.SetStateAction<number>>;
  brushType: TBrushType;
  setBrushType: React.Dispatch<React.SetStateAction<TBrushType>>;
  dashBrushType: string;
  setDashBrushType: React.Dispatch<React.SetStateAction<TDashBrushType>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export const SketchbookContext = createContext<TSketchbookContext>({
  thickness: 1,
  setThickness: () => {},
  brushType: {
    default: true,
    circular: false,
    dash: false,
    eraser: false,
  },
  setBrushType: () => {},
  dashBrushType: "5,10,5",
  setDashBrushType: () => {},
  color: "#000",
  setColor: () => {},
});
