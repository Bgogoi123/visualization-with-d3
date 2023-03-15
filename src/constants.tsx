import { TBrushesList } from "./types";

// nav icons:
import smilingFace from "./assets/emoji/smilingFace.svg";
import homeIcon from "./assets/icons/homeIcon.svg";
import pencilIcon from "./assets/icons/pencilIcon.svg";

// svg images:
import circularBrush from "./assets/images/circularBrush.svg";
import dash_10_10_10 from "./assets/images/dash_10_10_10.svg";
import dash_10_5_5 from "./assets/images/dash_10_5_5.svg";
import dash_5_10_5 from "./assets/images/dash_5_10_5.svg";
import dash_5_5_10 from "./assets/images/dash_5_5_10.svg";
import dash_5_5_5 from "./assets/images/dash_5_5_5.svg";
import defaultBrush from "./assets/images/defaultBrush.svg";

// svg images active:
import circularBrush_active from "./assets/images/circularBrushActive.svg";
import dash_10_10_10_active from "./assets/images/dash_10_10_10_Active.svg";
import dash_10_5_5_active from "./assets/images/dash_10_5_5_Active.svg";
import dash_5_10_5_active from "./assets/images/dash_5_10_5_Active.svg";
import dash_5_5_10_active from "./assets/images/dash_5_5_10_Active.svg";
import dash_5_5_5_active from "./assets/images/dash_5_5_5_Active.svg";
import defaultBrushActive from "./assets/images/defaultBrushActive.svg";

export const links: {
  label: string;
  icon: JSX.Element;
  path: string;
}[] = [
  {
    label: "Home",
    icon: <img src={homeIcon} />,
    path: "/",
  },
  {
    label: "Smiling Cursor",
    icon: <img src={smilingFace} />,
    path: "/smiley",
  },
  {
    label: "SketchBook",
    icon: <img src={pencilIcon} />,
    path: "/sketchbook",
  },
  // {
  //   label: "Trial",
  //   icon: <img className="spinner" src={loaderIcon} />,
  //   path: "/trial",
  // },
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
  {
    id: "circularBrush",
    type: "circular",
    src: circularBrush,
  },
];

export const CHANGED_SRC = [
  defaultBrushActive,
  dash_10_10_10_active,
  dash_10_5_5_active,
  dash_5_10_5_active,
  dash_5_5_10_active,
  dash_5_5_5_active,
  circularBrush_active,
];

export const ERASER_COLOR = "#fff";
