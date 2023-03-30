import { TBrushesList } from "./types";

// nav icons:
import smilingFace from "./assets/emoji/smilingFace.svg";
import homeIcon from "./assets/icons/homeIcon.svg";
import pencilIcon from "./assets/icons/pencilIcon.svg";

// svg images:
import dash_10_10_10 from "./assets/images/dash_10_10_10.svg";
import dash_10_5_5 from "./assets/images/dash_10_5_5.svg";
import dash_5_10_5 from "./assets/images/dash_5_10_5.svg";
import dash_5_5_10 from "./assets/images/dash_5_5_10.svg";
import dash_5_5_5 from "./assets/images/dash_5_5_5.svg";
import defaultBrush from "./assets/images/defaultBrush.svg";

export const links: {
  label: string;
  icon: JSX.Element;
  path: string;
}[] = [
  {
    label: "Home",
    icon: <img src={homeIcon} alt="Icon showing a House" />,
    path: "/",
  },
  {
    label: "Smiling Cursor",
    icon: <img src={smilingFace} alt="Icon showing a smiling emoji" />,
    path: "/smiley",
  },
  {
    label: "SketchBook",
    icon: <img src={pencilIcon} alt="Icon showing a pencil" />,
    path: "/sketchbook",
  },
];

export const INIT_BRUSHES: TBrushesList[] = [
  {
    id: "defaultBrush",
    type: "default",
    src: defaultBrush,
  },
  {
    id: "dash_10_10_10",
    src: dash_10_10_10,
    type: "dash",
    value: "10,10,10",
  },
  {
    id: "dash_10_5_5",
    src: dash_10_5_5,
    type: "dash",
    value: "10,5,5",
  },
  {
    id: "dash_5_10_5",
    src: dash_5_10_5,
    type: "dash",
    value: "5,10,5",
  },
  {
    id: "dash_5_5_10",
    src: dash_5_5_10,
    type: "dash",
    value: "5,5,10",
  },
  {
    id: "dash_5_5_5",
    src: dash_5_5_5,
    type: "dash",
    value: "5,5,5",
  },
];

export const SIZES = [1, 4, 8, 13, 30];
export const ERASER_COLOR = "#fff";
export const BRUSH_COLORS = [
  "#ffffff", //white
  "#f2ff00", //yellow
  "#fd7e14", //orange
  "#fa5252", //red
  "#e64980", //pink
  "#ba05e8", //violet
  "#0508b0", //darkblue
  "#00ccff", //lightblue
  "#82c91e", //lightgreen
  "#0f6300", //darkgreen
  "#824d03", //brown
  "#000000", //black
];
