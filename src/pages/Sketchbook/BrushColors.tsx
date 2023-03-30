import { Box, Flex, UnstyledButton } from "@mantine/core";
import { useContext } from "react";
import { BRUSH_COLORS, ERASER_COLOR } from "../../constants";
import { SketchbookContext } from "../../context";
import { brushColor, brushColorContainer, selectedColor } from "./styles";

const BrushColors = () => {
  const { color: currentColor, setColor } = useContext(SketchbookContext);

  return (
    <Box sx={brushColorContainer} title="Colors">
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
        {BRUSH_COLORS.map((color, index) => {
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
