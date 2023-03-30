export type TBrushType = {
  default: boolean;
  dash: boolean;
  eraser: boolean;
};

export type TBrushesList = {
  id: string;
  type: string;
  src: string;
  value?: TDashBrushType;
};

export type TDashBrushType =
  | "5,5,5"
  | "5,5,10"
  | "5,10,5"
  | "10,5,5"
  | "10,10,10";
