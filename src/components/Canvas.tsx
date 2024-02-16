import { useState } from "react";
import { getMousePosition } from "../utils/Mouse.ts";
import { drawLine } from "../utils/Drawing.ts";
import { Coordinates } from "../utils/types.ts";

const Canvas = () => {
  const [, setMousePosition] = useState<Coordinates>({
    xCoord: 0,
    yCoord: 0,
  });
  const [clickStartPosition, setClickStartPosition] = useState<Coordinates>({
    xCoord: 0,
    yCoord: 0,
  });
  const [clicEndPosition, setClickEndPosition] = useState<Coordinates>({
    xCoord: 0,
    yCoord: 0,
  });

  const updateMousePosition = (event: any) => {
    event.preventDefault();

    const newMousePosition = getMousePosition(event);
    setMousePosition(newMousePosition);
  };

  const updateClickStartPosition = (event: any) => {
    event.preventDefault();

    const clickCoordinates = getMousePosition(event);
    setClickStartPosition(clickCoordinates);
  };

  const updateClickEndPosition = (event: any) => {
    event.preventDefault();

    const clickCoordinates = getMousePosition(event);
    setClickEndPosition(clickCoordinates);
  };

  return (
    <canvas
      id="myCanvas"
      style={{
        backgroundColor: "lightgray",
        // width: "100%",
        // height: "100vh",
        // margin: "none",
        border: "none",
        objectFit: "contain",
      }}
      onMouseMoveCapture={(e) => updateMousePosition(e)}
      onMouseDown={(e) => updateClickStartPosition(e)}
      onMouseUp={(e) => {
        updateClickEndPosition(e);
        drawLine(clickStartPosition, clicEndPosition);
      }}
    ></canvas>
  );
};

export default Canvas;
