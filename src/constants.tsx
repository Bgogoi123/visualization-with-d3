import smilingFace from "./assets/emoji/smilingFace.svg";
import homeIcon from "./assets/icons/homeIcon.svg";
import pencilIcon from "./assets/icons/pencilIcon.svg";

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
];

export const Logo = () => {
  return (
    <img
      src={"https://picsum.photos/50"}
      alt={
        "A random image loaded on each render from the URL : https://picsum.photos"
      }
    />
  );
};
