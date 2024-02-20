import { useEffect, useRef, useState } from "react";
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
  const [clickEndPosition, setClickEndPosition] = useState<Coordinates>({
    xCoord: 0,
    yCoord: 0,
  });

  useEffect(() => {
    try {
      const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
      const ctx = canvas?.getContext("2d");
      drawLine(clickStartPosition, clickEndPosition, ctx);
    } catch (error) {
      console.error("No canvas element found!");
    }
  }, [clickEndPosition]);

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
        // width: "100vw",
        // height: "100vh",
        margin: "0",
        border: "0",
      }}
      onMouseMoveCapture={(e) => updateMousePosition(e)}
      onMouseDown={(e) => updateClickStartPosition(e)}
      onMouseUp={(e) => updateClickEndPosition(e)}
    ></canvas>
  );
};

export default Canvas;
