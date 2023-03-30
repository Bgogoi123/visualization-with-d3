import { ActionIcon, Menu, Text, UnstyledButton } from "@mantine/core";
import { useContext } from "react";
import brushIcon from "../../assets/icons/brushIcon.svg";
import { INIT_BRUSHES } from "../../constants";
import { SketchbookContext } from "../../context";
import { TDashBrushType } from "../../types";
import { brushTypeContainer } from "./styles";
import "./styles.css";

export const BrushTypeContainer = ({ children }: { children: JSX.Element }) => {
  return <span className="brushTypeContainer">{children}</span>;
};

const BrushTypes = () => {
  const { setBrushType, setDashBrushType } = useContext(SketchbookContext);

  const handleClick = (brush: {
    id: string;
    src: string;
    type: string;
    value?: TDashBrushType;
  }) => {
    setBrushType({
      dash: brush.type === "dash",
      default: brush.type === "default",
      eraser: brush.type === "eraser",
    });

    if (brush.value !== undefined) {
      setDashBrushType(brush.value);
    }
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton sx={brushTypeContainer}>
          <Text>
            <ActionIcon
              variant={"default"}
              color={"dark"}
              size={"md"}
              title="Pick a brush"
            >
              <img
                src={brushIcon}
                width="15px"
                height={"15px"}
                alt="Icon to show Brushes"
              />
            </ActionIcon>
          </Text>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Brushes</Menu.Label>

        {INIT_BRUSHES.map((brush, index) => {
          return (
            <Menu.Item key={index} onClick={() => handleClick(brush)}>
              <img
                src={brush.src}
                height="20px"
                alt="Showing different brush types"
              />
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default BrushTypes;
