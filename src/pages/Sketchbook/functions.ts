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
  setRemovedPaths,
}: IDefinePath) => {
  setRemovedPaths([]);
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

// undo
export const undo = ({
  area,
  setLastStroke,
}: {
  area: d3.Selection<d3.BaseType, unknown, d3.BaseType, unknown>;
  setLastStroke: (value: unknown) => void;
}) => {
  Array.from(area).forEach(function (element) {
    const elementD = (element as SVGPathElement).getAttribute("d");
    if (elementD !== null) {
      setLastStroke(element);
    }
  });
};

// redo
export const redo = ({
  svg,
  removedPaths,
}: {
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  removedPaths: unknown[];
}) => {
  const removedPath = removedPaths.pop() as SVGPathElement;
  const removedPathDetails = {
    d: removedPath?.getAttribute("d"),
    stroke: removedPath?.getAttribute("stroke"),
    strokeWidth: removedPath?.getAttribute("stroke-width"),
    dashArray: removedPath?.getAttribute("stroke-dasharray"),
  };

  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke-linecap", "butt")
    .attr("d", removedPathDetails.d)
    .attr("stroke", removedPathDetails.stroke)
    .attr("stroke-width", removedPathDetails.strokeWidth)
    .attr("stroke-dasharray", removedPathDetails.dashArray);
};
