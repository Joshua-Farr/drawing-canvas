/// Logic for drawing shapes on the canvas`

import { Shape, Coordinates } from "./types";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

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

export const drawShape = (position: Coordinates, shape: Shape) => {
  if (canvas?.getContext) {
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      if (shape.name === "rectangle") {
        ctx.fillRect(position.xCoord, position.yCoord, 150, 75);
      } else if (shape.name === "circle" && shape.radius) {
        ctx.arc(
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
  } else {
    console.error("No canvas element found!");
  }
};

export const drawLine = (start: Coordinates, end: Coordinates) => {
  console.log(
    `Drawing a line from (${start.xCoord},${start.yCoord}) to (${end.xCoord},${end.yCoord})`
  );

  const ctx = canvas?.getContext("2d");

  if (ctx) {
    ctx.scale(1, 1);
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, 2 * Math.PI);
    ctx.stroke();

    //
    ctx.beginPath();
    ctx.moveTo(start.xCoord, start.yCoord);
    // ctx.moveTo(0, 0);
    ctx.lineTo(end.xCoord, end.yCoord);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.stroke();
  }
};

export const renderAllShapes = (shapeList: Shape[]) => {
  shapeList.forEach((shape) =>
    console.log(`Here is the shape name: ${shape.name}`)
  );
};
