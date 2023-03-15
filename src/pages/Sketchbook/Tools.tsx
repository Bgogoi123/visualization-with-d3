import { ActionIcon, Button, Flex } from "@mantine/core";
import { useContext } from "react";
import * as d3 from "d3";
import BrushSizes from "./BrushSizes";
import BrushTypes from "./BrushTypes";
import BrushColors from "./BrushColors";
import { toolsContainer } from "./styles";
import { SketchbookContext } from "../../context";
import clearIcon from "../../assets/icons/clearIcon.svg";
import eraserIcon from "../../assets/icons/eraserIcon.svg";
import pencilIcon from "../../assets/icons/pointerIcons/pencilCursor.svg";

const Tools = () => {
  const { brushType, setBrushType } = useContext(SketchbookContext);

  const clearAll = () => {
    const svg = d3.select("svg#drawable-area");
    svg.selectAll("*").remove();
  };

  const handleErase = () => {
    setBrushType({
      default: false,
      dash: false,
      circular: false,
      eraser: true,
    });
  };

  const enablePencil = () => {
    setBrushType({
      default: true,
      dash: false,
      circular: false,
      eraser: false,
    });
  };

  return (
    <Flex
      direction={"row"}
      gap={"10px"}
      justify="center"
      align={"center"}
      sx={toolsContainer}
    >
      <ActionIcon
        variant={"default"}
        color={"dark"}
        size={"md"}
        onClick={clearAll}
        title="Clear all"
      >
        <img src={clearIcon} width="15px" height={"15px"} />
      </ActionIcon>

      <ActionIcon
        variant={!brushType.eraser ? "light" : "default"}
        color={!brushType.eraser ? "indigo" : "dark"}
        size={"md"}
        onClick={enablePencil}
        title="Pencil"
      >
        <img src={pencilIcon} width="15px" height={"15px"} />
      </ActionIcon>

      <ActionIcon
        variant={brushType.eraser ? "light" : "default"}
        color={brushType.eraser ? "indigo" : "dark"}
        size={"md"}
        onClick={handleErase}
        title="Eraser"
      >
        <img src={eraserIcon} width="15px" height={"15px"} />
      </ActionIcon>

      <BrushSizes />
      <BrushTypes />
      <BrushColors />
    </Flex>
  );
};

export default Tools;
