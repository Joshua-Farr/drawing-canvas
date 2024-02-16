import { useState } from "react";
import { getMousePosition } from "../utils/Mouse.ts";

const Canvas = () => {
  const [mousePosition, setMousePosition] = useState({});
  const [clickStartPosition, setClickStartPosition] = useState({});
  const [clicEndPosition, setClickEndPosition] = useState({});

  const updateMousePosition = (event: any) => {
    event.preventDefault();

    const mousePosition = getMousePosition(event);
    setMousePosition(mousePosition);
    // console.log(
    //   `Current mouse coordinates: (${mousePosition.mouseX}, ${mousePosition.mouseY})`
    // );
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

    // console.log(
    //   `Here are the click coordinates: ${clickStartPosition}, ${clicEndPosition}`
    // );
  };

  return (
    <canvas
      id="myCanvas"
      style={{
        backgroundColor: "lightgray",
        width: "100%",
        height: "100vh",
        margin: "none",
        border: "none",
      }}
      onMouseMoveCapture={(e) => updateMousePosition(e)}
      onMouseDown={(e) => updateClickStartPosition(e)}
      onMouseUp={(e) => updateClickEndPosition(e)}
    ></canvas>
  );
};

export default Canvas;
