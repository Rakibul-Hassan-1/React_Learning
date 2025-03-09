import React, { useState } from "react";

function Toolbar({ onToolChange, onColorChange, onThicknessChange, onClear }) {
  const [color, setColor] = useState("#000000");
  const [thickness, setThickness] = useState(2);

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    onColorChange(selectedColor);
  };

  const handleThicknessChange = (e) => {
    const selectedThickness = e.target.value;
    setThickness(selectedThickness);
    onThicknessChange(selectedThickness);
  };

  return (
    <div className="toolbar">
      <button onClick={() => onToolChange("freehand")}>Freehand</button>
      <button onClick={() => onToolChange("rectangle")}>Rectangle</button>
      <button onClick={() => onToolChange("circle")}>Circle</button>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        title="Pick a Color"
      />
      <input
        type="range"
        min="1"
        max="10"
        value={thickness}
        onChange={handleThicknessChange}
        title="Select Thickness"
      />
      <button onClick={() => onToolChange("eraser")}>Eraser</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Toolbar;
