import { Box, Button, Flex, Text, UnstyledButton } from "@mantine/core";
import { useContext } from "react";
import { ERASER_COLOR } from "../../constants";
import { SketchbookContext } from "../../context";
import {
  brushColor,
  brushColorContainer,
  brushSizeLabel,
  selectedColor,
} from "./styles";

const brushColors = [
  "#ffffff",
  "#fab005",
  "#fd7e14",
  "#fa5252",
  "#e64980",
  "#be4bdb",
  "#7950f2",
  "#15aabf",
  "#12b886",
  "#40c057",
  "#82c91e",
  "#000000",
];

const BrushColors = () => {
  const { color: currentColor, setColor } = useContext(SketchbookContext);

  return (
    <Box sx={brushColorContainer}>
      <Flex
        justify="center"
        align="center"
        gap={"10px"}
        sx={{ marginBottom: "3px" }}
      >
        <Box
          sx={[
            selectedColor,
            {
              backgroundColor: currentColor,
            },
          ]}
          title="Brush Color"
        ></Box>
        <Box
          sx={[
            selectedColor,
            {
              backgroundColor: ERASER_COLOR,
            },
          ]}
          title="Eraser Color"
        ></Box>
      </Flex>
      <Flex
        wrap={"wrap"}
        justify="center"
        align={"center"}
        columnGap={"15px"}
        rowGap="3px"
      >
        {brushColors.map((color, index) => {
          return (
            <UnstyledButton
              onClick={() => setColor(color)}
              sx={[
                brushColor,
                {
                  backgroundColor: color,
                },
              ]}
              key={index}
            ></UnstyledButton>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BrushColors;
