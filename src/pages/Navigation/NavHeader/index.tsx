import { Flex, Header, Text } from "@mantine/core";
import { Logo } from "./Logo";

const NavHeader = () => {
  return (
    <Header height={{ base: 100, md: 70 }} p="md">
      <Flex justify={"flex-start"} gap="2em" align={"center"}>
        <Logo />
        <Text>Visualization with D3</Text>
      </Flex>
    </Header>
  );
};

export default NavHeader;
