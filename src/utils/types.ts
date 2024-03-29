// Typing for canvas

export interface Coordinates {
  xCoord: number;
  yCoord: number;
}

export interface Shape {
  name: "circle" | "diamond" | "rectangle" | "oval" | "line";
  coordinates: Coordinates;
  height?: number;
  width?: number;
  radius?: number;
  fill: string | "#edd5f0";
  isDragging: boolean | false;
}
