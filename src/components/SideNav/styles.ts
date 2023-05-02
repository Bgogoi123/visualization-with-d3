import { CSSObject } from "@mantine/core";
export const linkContainer: CSSObject = {
  marginTop: "10px",
  border: "1px solid #D6D6D6",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "whitesmoke",
  },
  "&:active": {
    transform: "scale(0.95)",
    backgroundColor: "#D6D6D6",
  },
};
