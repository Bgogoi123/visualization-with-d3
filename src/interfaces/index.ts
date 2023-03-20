import { TBrushType, TDashBrushType } from "../types";

export interface ISideNav {
  children: JSX.Element;
  navHeader: JSX.Element;
  navContent: JSX.Element;
}

export interface IDefinePath {
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  color: string;
  thisLine: d3.Line<[number, number]>;
  brushType: TBrushType;
  points: [number, number][];
  thickness: number;
  dashBrushType: TDashBrushType;
  setRemovedPaths: React.Dispatch<React.SetStateAction<unknown[]>>;
}

export interface IRemoveExtraPaths {
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  color: string;
  mainPath: unknown;
  brushType: TBrushType;
  thickness: number;
  dashBrushType: TDashBrushType;
}
