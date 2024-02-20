/// Logic for drawing shapes on the canvas`

import { Shape, Coordinates } from "./types";

export const calculateRectangleHeightAndWidth = (
  start: Coordinates,
  end: Coordinates
) => {
  const height = Math.abs(start.yCoord - end.yCoord);
  const width = Math.abs(start.xCoord - end.xCoord);

  return { height: height, width: width };
};

export const calculateMiddleOfRectangle = (
  start: Coordinates,
  end: Coordinates
) => {
  let middleYCoord = 0;
  let middleXCoord = 0;

  if (start.yCoord > end.yCoord) {
    middleYCoord = start.yCoord - end.yCoord;
  } else {
    middleYCoord = end.yCoord - start.yCoord;
  }

  if (start.xCoord > end.xCoord) {
    middleXCoord = end.xCoord - start.xCoord;
  } else {
    middleXCoord = start.xCoord - end.xCoord;
  }

  return {
    xCoord: middleXCoord,
    yCoord: middleYCoord,
  };
};

export const drawShape = (
  position: Coordinates,
  shape: Shape,
  context: CanvasRenderingContext2D
) => {
  if (context) {
    if (shape.name === "rectangle") {
      context.fillRect(position.xCoord, position.yCoord, 150, 75);
    } else if (shape.name === "circle" && shape.radius) {
      context.arc(
        position.xCoord,
        position.yCoord,
        shape.radius,
        0,
        2 * Math.PI,
        false
      );
    }
  } else {
    console.error("2D context not supported!");
  }
};

export const drawLine = (
  start: Coordinates,
  end: Coordinates,
  context: CanvasRenderingContext2D | null | undefined
) => {
  if (context) {
    context.imageSmoothingEnabled = false;
    context.beginPath();
    context.moveTo(start.xCoord, start.yCoord);
    context.lineTo(end.xCoord, end.yCoord);
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.lineCap = "round";
    context.stroke();
  }
};

export const renderAllShapes = (shapeList: Shape[]) => {
  shapeList.forEach((shape) =>
    console.log(`Here is the shape name: ${shape.name}`)
  );
};
