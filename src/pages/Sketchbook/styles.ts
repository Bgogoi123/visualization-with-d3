import { CSSObject } from "@mantine/core";

export const toolsContainer: CSSObject = {
  margin: "1px",
  marginBottom: "10px",
  boxShadow: "0px 0px 2px 0px grey",
  borderRadius: "4px",
  backgroundColor: "white",
};

export const brushSizeLabel: CSSObject = {
  fontSize: "10px",
  textAlign: "center",
};

// brush sizes
export const brushSizeContainer: CSSObject = {
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  padding: "0 10px 2px 10px",
};

export const brushSize: CSSObject = {
  margin: 0,
  borderRadius: "100%",
};

export const brushSizeActive: CSSObject = {
  backgroundColor: "primary",
};

export const brushSizeInactive: CSSObject = {
  backgroundColor: "#666666",
};

export const brushSizeXS: CSSObject = {
  ...brushSize,
  padding: "2px",
  width: "2px",
  height: "2px",
};

export const brushSizeSM: CSSObject = {
  ...brushSize,
  padding: "3px",
  width: "3px",
  height: "3px",
};

export const brushSizeMD: CSSObject = {
  ...brushSize,
  padding: "5px",
  width: "10px",
  height: "10px",
  "&:hover": {
    backgroundColor: "red",
    color: "red",
  },
};

export const brushSizeLG: CSSObject = {
  ...brushSize,
  padding: "5px",
  width: "15px",
  height: "15px",
};

export const brushSizeXL: CSSObject = {
  ...brushSize,
  padding: "5px",
  width: "20px",
  height: "20px",
};

// brush types
export const brushTypeContainer: CSSObject = {
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  padding: "0 0 4px 0",
  display: "flex",
  flexDirection: "column",
  width: "200px",
};

export const circularBrushStyle: CSSObject = {
  height: "10px",
};

// brush colors
export const brushColorContainer: CSSObject = {
  margin: "7px 0 7px 0",
  border: "1px solid #d6d6d6",
  borderRadius: "5px",
  padding: "5px",
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  width: "200px",
};

export const brushColor: CSSObject = {
  padding: "5px",
  width: "15px",
  height: "15px",
  borderRadius: "100%",
  border: "1px solid black",
};

export const selectedColor: CSSObject = {
  borderRadius: "100%",
  border: "1px solid #000",
  padding: "10px",
  width: "30px",
  height: "30px",
};
