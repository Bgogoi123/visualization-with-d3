import { Box, Button, Flex, Text } from "@mantine/core";
import { useContext } from "react";
import { SketchbookContext } from "../../context";
import {
  brushSizeActive,
  brushSizeContainer,
  brushSizeInactive,
  brushSizeLabel,
  brushSizeLG,
  brushSizeMD,
  brushSizeSM,
  brushSizeXL,
  brushSizeXS,
} from "./styles";

const BrushSizes = () => {
  const { thickness, setThickness } = useContext(SketchbookContext);

  const changeBrushSize = (size: number) => {
    setThickness(size);
  };

  const sizes = [1, 4, 8, 13, 30];
  const styles = [
    brushSizeXS,
    brushSizeSM,
    brushSizeMD,
    brushSizeLG,
    brushSizeXL,
  ];

  return (
    <Box sx={brushSizeContainer}>
      <Text sx={brushSizeLabel}>Size</Text>
      <Flex direction={"row"} justify={"center"} align="center" gap={"5px"}>
        {sizes.map((size, index) => {
          return (
            <Button
              sx={styles[index]}
              styles={{
                root: thickness === size ? brushSizeActive : brushSizeInactive,
              }}
              onClick={() => changeBrushSize(size)}
              key={index}
            ></Button>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BrushSizes;
