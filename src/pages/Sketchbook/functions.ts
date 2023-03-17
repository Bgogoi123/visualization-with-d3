import { ERASER_COLOR } from "../../constants";
import { IDefinePath, IRemoveExtraPaths } from "../../interfaces";

// define <path> elements based on selected filters
export const definePath = ({
  svg,
  color,
  thisLine,
  brushType,
  points,
  thickness,
  dashBrushType,
}: IDefinePath) => {
  svg
    .append("path")
    .datum(points)
    .attr("id", "drawable-path")
    .attr("d", thisLine)
    .attr("stroke", brushType.eraser ? ERASER_COLOR : color)
    .attr("stroke-width", thickness)
    .attr(
      "stroke-dasharray",
      brushType.default || brushType.eraser ? "0" : dashBrushType
    )
    .attr("stroke-linecap", "butt")
    .attr("fill", "none");
};

// remove extra <path> elements
export const removeExtraPaths = ({
  svg,
  color,
  mainPath,
  brushType,
  thickness,
  dashBrushType,
}: IRemoveExtraPaths) => {
  svg
    .append("path")
    .attr("d", (mainPath as SVGPathElement).getAttribute("d"))
    .attr("stroke", brushType.eraser ? ERASER_COLOR : color)
    .attr("stroke-width", thickness)
    .attr("stroke-linecap", "butt")
    .attr(
      "stroke-dasharray",
      brushType.default || brushType.eraser ? "0" : dashBrushType
    )
    .attr("fill", "none");
};

// update the sketchbook with the latest svg elements
export const updateSketchbook = ({
  svgElement,
  oldArea,
  container,
}: {
  svgElement: string;
  oldArea: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  container: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
}) => {
  if (svgElement !== undefined && svgElement !== "") {
    oldArea.remove();
    container.html(svgElement);
  }
};
