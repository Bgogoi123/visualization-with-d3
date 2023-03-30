import { ActionIcon, Flex } from "@mantine/core";
import * as d3 from "d3";
import { useContext } from "react";
import undoIcon from "../../assets/icons/undoIcon.svg";
import redoIcon from "../../assets/icons/redoIcon.svg";
import clearIcon from "../../assets/icons/clearIcon.svg";
import eraserIcon from "../../assets/icons/eraserIcon.svg";
import pencilIcon from "../../assets/icons/pointerIcons/pencilCursor.svg";
import { SocketContext } from "../../components/SocketContainer";
import { SketchbookContext } from "../../context";
import BrushColors from "./BrushColors";
import BrushSizes from "./BrushSizes";
import BrushTypes from "./BrushTypes";
import { toolsContainer } from "./styles";
import { redo, undo } from "./functions";

const Tools = () => {
  const { brushType, setBrushType, removedPaths, setLastStroke } =
    useContext(SketchbookContext);
  const { socket } = useContext(SocketContext);

  const clearAll = () => {
    const svg = d3.select("svg#drawable-area");
    svg.selectAll("*").remove();

    // clear all screens
    socket.emit("clear", { clear: true });
  };

  const handleErase = () => {
    setBrushType({
      default: false,
      dash: false,
      eraser: true,
    });
  };

  const enablePencil = () => {
    setBrushType({
      default: true,
      dash: false,
      eraser: false,
    });
  };

  const handleUndo = () => {
    const area = d3.select("svg#drawable-area").selectAll("path");
    undo({
      area,
      setLastStroke,
    });
  };

  const handleRedo = () => {
    let svg = d3.select("#drawable-area");
    redo({ svg, removedPaths });
  };

  return (
    <Flex
      direction={"row"}
      gap={"10px"}
      justify="center"
      align={"center"}
      sx={toolsContainer}
    >
      {/* undo */}
      <ActionIcon
        variant={"default"}
        color={"dark"}
        size={"md"}
        onClick={handleUndo}
        title="Undo (ctrl+z)"
      >
        <img src={undoIcon} width="15px" height={"15px"} alt="Undo" />
      </ActionIcon>

      {/* redo */}
      <ActionIcon
        variant={"default"}
        color={"dark"}
        size={"md"}
        onClick={handleRedo}
        title="Redo (ctrl+y)"
      >
        <img src={redoIcon} width="15px" height={"15px"} alt="Redo" />
      </ActionIcon>

      {/* clear all */}
      <ActionIcon
        variant={"default"}
        color={"dark"}
        size={"md"}
        onClick={clearAll}
        title="Clear all"
      >
        <img src={clearIcon} width="15px" height={"15px"} alt="Clear all" />
      </ActionIcon>

      {/* eraser */}
      <ActionIcon
        variant={brushType.eraser ? "light" : "default"}
        color={brushType.eraser ? "indigo" : "dark"}
        size={"md"}
        onClick={handleErase}
        title="Eraser"
      >
        <img src={eraserIcon} width="15px" height={"15px"} alt="Eraser" />
      </ActionIcon>

      {/* Pencil */}
      <ActionIcon
        variant={!brushType.eraser ? "light" : "default"}
        color={!brushType.eraser ? "indigo" : "dark"}
        size={"md"}
        onClick={enablePencil}
        title="Pencil"
      >
        <img src={pencilIcon} width="15px" height={"15px"} alt="Pencil" />
      </ActionIcon>

      <BrushTypes />
      <BrushSizes />
      <BrushColors />
    </Flex>
  );
};

export default Tools;
