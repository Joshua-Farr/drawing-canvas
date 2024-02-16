// Typing for canvas

export interface Coordinates {
  mouseX: number;
  mouseY: number;
}

export interface Shape {
  xCoord: number;
  yCoord: number;
  height?: number;
  width?: number;
  radius?: number;
  fill: string | "#edd5f0";
  isDragging: boolean | false;
}
