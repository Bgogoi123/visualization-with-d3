import { Box, Button, Flex } from "@mantine/core";
import { useContext } from "react";
import { SIZES } from "../../constants";
import { SketchbookContext } from "../../context";
import {
  brushSizeActive,
  brushSizeContainer,
  brushSizeInactive,
  brushSizeLG,
  brushSizeMD,
  brushSizeSM,
  brushSizeXL,
  brushSizeXS,
} from "./styles";

const BrushSizes = () => {
  const { thickness, setThickness } = useContext(SketchbookContext);

  const changeBrushSize = (size: number) => {
    console.log({ size });
    setThickness(size);
  };

  const styles = [
    brushSizeXS,
    brushSizeSM,
    brushSizeMD,
    brushSizeLG,
    brushSizeXL,
  ];

  return (
    <Box sx={brushSizeContainer} title="Brush Size">
      <Flex direction={"row"} justify={"center"} align="center" gap={"5px"}>
        {SIZES.map((size, index) => {
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
