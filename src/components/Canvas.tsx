import { useEffect, useState } from "react";
import { getMousePosition } from "../utils/Mouse.ts";
import { drawLine, drawShape } from "../utils/Drawing.ts";
import { Coordinates, Shape } from "../utils/types.ts";

const Canvas = () => {
  const [shapesList, setShapesList] = useState([]);

  const addNewShapeToList = (shape: Shape) => {
    setShapesList((list) => {
      return [...list, shape];
    });
  };

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
      // drawLine(clickStartPosition, clickEndPosition, ctx);
      if (
        clickStartPosition.xCoord === 0 &&
        clickStartPosition.yCoord === 0 &&
        clickEndPosition.xCoord === 0 &&
        clickEndPosition.yCoord === 0
      ) {
        return;
      }
      drawShape(
        clickEndPosition,
        {
          name: "rectangle",
          coordinates: clickEndPosition,
          isDragging: true,
          radius: 10,
          fill: "",
        },
        ctx
      );
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
      }}
      width={window.innerWidth.toString()}
      height={window.innerHeight.toString()}
      onMouseMoveCapture={(e) => updateMousePosition(e)}
      onMouseDown={(e) => updateClickStartPosition(e)}
      onMouseUp={(e) => updateClickEndPosition(e)}
    ></canvas>
  );
};

export default Canvas;
