// Logic for handling mouse events

import { Coordinates } from "./types";

export const getMousePosition = (event: any) => {
  event.preventDefault();
  const mouseXCoord = event.clientX;
  const mouseYCoord = event.clientY;

  const currentMouseCoordinates: Coordinates = {
    xCoord: mouseXCoord,
    yCoord: mouseYCoord,
  };

  return currentMouseCoordinates;
};
