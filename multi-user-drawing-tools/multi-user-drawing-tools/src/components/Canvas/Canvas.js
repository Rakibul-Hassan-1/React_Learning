import React, { useEffect, useRef, useState } from "react";
import Chat from "../Chat/Chat";
import Toolbar from "./Toolbar";

function Canvas() {
  const [showChat, setShowChat] = useState(false);
  const [currentTool, setCurrentTool] = useState("freehand");
  const [color, setColor] = useState("#000000");
  const [thickness, setThickness] = useState(2);

  const canvasRef = useRef(null);

  // Dynamically adjust canvas size on window resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 250; // Adjust for sidebar
      canvas.height = window.innerHeight;
    };

    resizeCanvas(); // Set initial canvas size
    window.addEventListener("resize", resizeCanvas); // Update size on window resize

    return () => {
      window.removeEventListener("resize", resizeCanvas); // Cleanup listener
    };
  }, []);

  const handleToolChange = (tool) => {
    setCurrentTool(tool);
  };

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleThicknessChange = (selectedThickness) => {
    setThickness(Number(selectedThickness)); // Convert to number for proper thickness control
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  };

  return (
    <div className="canvas-page">
      <div className="canvas-tools">
        <Toolbar
          onToolChange={handleToolChange}
          onColorChange={handleColorChange}
          onThicknessChange={handleThicknessChange}
          onClear={handleClear}
        />
        <button
          className="toggle-chat-btn"
          onClick={() => setShowChat(!showChat)}
        >
          {showChat ? "Hide Chat" : "Show Chat"}
        </button>
      </div>
      <div className="canvas-content">
        <canvas
          ref={canvasRef}
          style={{
            border: "1px solid black",
            display: "block", // Ensure the canvas behaves like a block element
            backgroundColor: "#f1f1f1",
            cursor: "crosshair",
          }}
        />
      </div>
      {showChat && (
        <div className="canvas-chat">
          <Chat />
        </div>
      )}
    </div>
  );
}

export default Canvas;
