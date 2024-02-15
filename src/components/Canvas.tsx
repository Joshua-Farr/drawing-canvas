import { useState } from "react";

const Canvas = () => {
  interface MouseCoordinates {
    mouseX: number;
    mouseY: number;
  }

  const [mousePosition, setMousePosition] = useState({});
  const [clickStartPosition, setClickStartPosition] = useState({});
  const [clicEndPosition, setClickEndPosition] = useState({});

  const getMousePosition = (event: any) => {
    event.preventDefault();
    const mouseXCoord = event.clientX;
    const mouseYCoord = event.clientY;

    const currentMouseCoordinates: MouseCoordinates = {
      mouseX: mouseXCoord,
      mouseY: mouseYCoord,
    };

    return currentMouseCoordinates;
  };

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

    console.log(
      `Here is the click coordinates: ${clickStartPosition}, ${clicEndPosition}`
    );
  };

  return (
    <canvas
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
    >
      Hello world
    </canvas>
  );
};

export default Canvas;
