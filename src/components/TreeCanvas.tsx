// src/components/TreeCanvas.tsx
import React, { Component } from "react";

interface TreeCanvasProps {
  height: number;
  width: number;
  trunkColor?: string;
  leavesColor?: string;
}

class TreeCanvas extends Component<TreeCanvasProps> {
  private canvasRef: React.RefObject<HTMLCanvasElement | null>;

  constructor(props: TreeCanvasProps) {
    super(props);
    this.canvasRef = React.createRef();
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  generateTree(): void {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const trunkWidth = this.random(5, 10);
    const trunkHeight = this.random(100, canvas.height);
    const numLeaves = this.random(100, 200);

    const trunkX = (canvas.width - trunkWidth) / 2;
    const trunkY = canvas.height - trunkHeight;

    // Draw trunk
    ctx.fillStyle = this.props.trunkColor || "brown";
    ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight);

    // Draw leaves
    const leafThickness = this.random(1, 7);
    ctx.fillStyle = this.props.leavesColor || "green";
    
    for (let i = 0; i < numLeaves; i++) {
      const h = this.random(0, trunkHeight);
      const leafWidth = 0.5 * this.random(0, h);
      const leafX = (canvas.width - leafWidth) / 2;
      const leafY = trunkY + h;

      ctx.fillRect(leafX, leafY - 10, leafWidth, leafThickness);
    }
  }

  componentDidMount(): void {
    this.generateTree();
  }

  componentDidUpdate(prevProps: TreeCanvasProps): void {
    if (prevProps.height !== this.props.height) {
      this.generateTree();
    }
  }

  render(): React.ReactNode {
    return (
      <canvas
        ref={this.canvasRef}
        width={this.props.width}  
        height={this.props.height}
        style={{ display: "block" }}
      />
    );
  }
}

export default TreeCanvas;