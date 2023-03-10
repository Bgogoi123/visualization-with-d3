import { Flex, Navbar, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { linkContainer } from "../../../components/SideNav/styles";
import { links } from "../../../constants";

const NavbarContent = () => {
  const navigate = useNavigate();

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={false}
      width={{ sm: 200, lg: 300 }}
    >
      {links.map((link, index) => {
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
          </Flex>
        );
      })}
    </Navbar>
  );
};

export default NavbarContent;
