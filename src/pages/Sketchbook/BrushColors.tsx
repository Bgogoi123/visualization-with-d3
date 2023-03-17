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

const BrushColors = () => {
  const { color: currentColor, setColor } = useContext(SketchbookContext);

  return (
    <Box sx={brushColorContainer}>
      <Flex
        direction={"column"}
        justify="center"
        align="center"
        gap={"6px"}
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
