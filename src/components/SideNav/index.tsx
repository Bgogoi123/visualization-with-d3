import { AppShell } from "@mantine/core";
import { ISideNav } from "../../interfaces";

const SideNav = ({ children, navHeader, navContent }: ISideNav) => {
  return (
    <AppShell
      sx={{ margin: 0 }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={navHeader}
      navbar={navContent}
    >
      {children}
    </AppShell>
  );
};

export default SideNav;
