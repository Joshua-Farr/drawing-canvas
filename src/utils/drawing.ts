/// Logic for drawing shapes on the canvas

import { Shape, Coordinates } from "../types";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;

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
  console.log(shapeList);
};
