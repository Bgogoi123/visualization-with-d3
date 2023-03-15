import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Menu,
  Select,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useContext, useRef } from "react";

import { SketchbookContext } from "../../context";
import { TDashBrushType } from "../../types";

import { CHANGED_SRC, INIT_BRUSHES } from "../../constants";
import { brushSizeLabel, brushTypeContainer } from "./styles";
import brushIcon from "../../assets/icons/brushIcon.svg";
import "./styles.css";

export const BrushTypeContainer = ({ children }: { children: JSX.Element }) => {
  return <span className="brushTypeContainer">{children}</span>;
};

const BrushTypes = () => {
  const tempRef = useRef<any[]>([]);

  const { brushType, setBrushType, dashBrushType, setDashBrushType } =
    useContext(SketchbookContext);

  const handleClick = (
    brush: {
      id: string;
      src: string;
      type: string;
      value?: TDashBrushType;
    },
    index: number
  ) => {
    INIT_BRUSHES.forEach((src, srcIndex) => {
      if (srcIndex !== index) {
        tempRef.current[srcIndex].src = INIT_BRUSHES[srcIndex].src;
      }
    });

    tempRef.current[index].src = CHANGED_SRC[index];

    setBrushType({
      circular: brush.type === "circular",
      dash: brush.type === "dash",
      default: brush.type === "default",
      eraser: brush.type === "eraser",
    });

    if (brush.value !== undefined) {
      setDashBrushType(brush.value);
    }
  };

  return (
    // <Box sx={brushTypeContainer}>
    //   <Text sx={brushSizeLabel}>Brushes</Text>

    //   <Flex wrap={"wrap"} justify="center">
    //     {INIT_BRUSHES.map((brush, index) => {
    //       return (
    //         <BrushTypeContainer key={index}>
    //           <img
    //             src={brush.src}
    //             height="40px"
    //             width="40px"
    //             ref={(ref) => tempRef.current.push(ref)}
    //             onClick={() => handleClick(brush, index)}
    //           />
    //         </BrushTypeContainer>
    //       );
    //     })}
    //   </Flex>
    // </Box>

    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton
          sx={{
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          <Text sx={{ color: "silver" }}>
            <ActionIcon
              variant={"default"}
              color={"dark"}
              size={"md"}
              title="Pick a brush"
            >
              <img src={brushIcon} width="15px" height={"15px"} />
            </ActionIcon>
          </Text>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Brushes</Menu.Label>

        {INIT_BRUSHES.map((brush, index) => {
          return (
            <Menu.Item
              key={index}
              ref={(ref) => tempRef.current.push(ref)}
              onClick={() => handleClick(brush, index)}
            >
              <img src={brush.src} height="20px" />
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default BrushTypes;
