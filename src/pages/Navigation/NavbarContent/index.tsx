import { Button, Flex, Navbar, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { linkContainer } from "../../../components/SideNav/styles";
import { LINKS } from "../../../constants";
import "./styles.css";

const TOURS = [
  { tourLabel: "smiley", isCompleted: true },
  { tourLabel: "sketchbook", isCompleted: false },
];

const NavbarContent = () => {
  const navigate = useNavigate();

  const [tours, setTours] = useState(TOURS);

  useEffect(() => {
    startTour();
  }, [tours]);

  function startTour() {
    tours.forEach((tour, index) => {
      showTour(index, tour);
    });
  }

  function showTour(
    index: number,
    tour?: {
      tourLabel: string;
      isCompleted: boolean;
    }
  ) {
    const prevTourDiv = document.getElementById(`tour-${index - 1}`);
    const currentDiv = document.getElementById(`tour-${index}`);
    const prevArrowDiv = document.getElementById(`tour-arrow-${index - 1}`);
    const arrowDiv = document.getElementById(`tour-arrow-${index}`);

    if (tour?.isCompleted) {
      if (prevTourDiv !== undefined && prevTourDiv !== null) {
        // @ts-ignore
        prevTourDiv.style.visibility = "hidden";
      }
      if (prevArrowDiv !== undefined && prevArrowDiv !== null) {
        prevArrowDiv.style.visibility = "hidden";
      }

      // @ts-ignore
      currentDiv.style.visibility = "visible";
      // @ts-ignore
      arrowDiv.style.visibility = "visible";
    } else {
      // @ts-ignore
      currentDiv.style.visibility = "hidden";
      // @ts-ignore
      arrowDiv.style.visibility = "hidden";
    }
  }

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={false}
      width={{ sm: 200, lg: 300 }}
    >
      {LINKS.map((link, index) => {
        return (
          <Flex
            justify={"flex-start"}
            align={"center"}
            gap="1em"
            sx={linkContainer}
            key={index}
            onClick={() => navigate(link.path)}
          >
            {link.icon}
            <Text>{link.label}</Text>
            <div id={`tour-arrow-${index}`} className="tourArrow"></div>
            <div id={`tour-${index}`} className="tourPopup">
              <p className="tourPopupText">{link.description}</p>
              <Flex gap="xs">
                {index > 0 && (
                  <Button color="gray" compact>
                    Prev
                  </Button>
                )}
                <Button
                  color="dark"
                  compact
                  onClick={(e) => {
                    e.stopPropagation();
                    setTours((prev) => {
                      if (LINKS[index + 1] !== undefined) {
                        let temp = [...prev];
                        temp[index + 1].isCompleted = true;
                        return temp;
                      }
                      showTour(index);
                      return prev;
                    });
                  }}
                >
                  {index === LINKS.length - 1 ? "Done" : "Next"}
                </Button>
              </Flex>
            </div>
          </Flex>
        );
      })}
    </Navbar>
  );
};

export default NavbarContent;

{
  /* {links.map((link, index) => {
        return (
          <Popover
            width={200}
            position="right"
            withArrow
            shadow="md"
            opened={opened}
          >
            <Flex
              justify={"flex-start"}
              align={"center"}
              gap="1em"
              sx={linkContainer}
              key={index}
              onClick={() => navigate(link.path)}
            >
              {link.icon}
              <Popover.Target>
                <Text onMouseEnter={open}>{link.label}</Text>
              </Popover.Target>
              <Popover.Dropdown>
                <Flex
                  direction="column"
                  justify="center"
                  align="flex-end"
                  gap="xs"
                >
                  <Text size="sm">{link.description}</Text>
                  <Button color="dark" compact onClick={close}>
                    Next
                  </Button>
                </Flex>
              </Popover.Dropdown>
            </Flex>
          </Popover>
        );
      })} */
}
