/// Logic for drawing shapes on the canvas

import { Shape, Coordinates } from "./types";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

const calculateRectangleHeightAndWidth = (
  start: Coordinates,
  end: Coordinates
) => {
  const height = Math.abs(start.mouseY - end.mouseY);
  const width = Math.abs(start.mouseX - end.mouseX);

  return { height: height, width: width };
};

const calculateMiddleOfRectangle = (start: Coordinates, end: Coordinates) => {
  let middleYCoord = 0;
  let middleXCoord = 0;

  if (start.mouseY > end.mouseY) {
    middleYCoord = start.mouseY - end.mouseY;
  } else {
    middleYCoord = end.mouseY - start.mouseY;
  }

  if (start.mouseX > end.mouseX) {
    middleXCoord = end.mouseX - start.mouseX;
  } else {
    middleXCoord = start.mouseX - end.mouseX;
  }

  return {
    xCoord: middleXCoord,
    yCoord: middleYCoord,
  };
};

export const drawShape = (position: Coordinates) => {
  if (canvas?.getContext) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.fillRect(position.mouseX, position.mouseY, 150, 75);
    } else {
      console.error("2D context not supported!");
    }
  } else {
    console.error("No canvas element found!");
  }
};

export const renderAllShapes = (shapeList: Shape[]) => {
  shapeList.forEach((shape) =>
    console.log(`Here is the shape name: ${shape.name}`)
  );
};
