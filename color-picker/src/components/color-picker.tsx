import React, { useState } from "react";
import Styles from "./color.module.css";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(selectedColor);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000);
  };
  return (
    <div className={Styles.mainContainer}>
      <h2 className={Styles.heading}>Pick a Color</h2>
      <div className={Styles.inputContainer}>
        <input
          className={Styles.inputbox}
          type="color"
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
      <div
        className={Styles.contentContainer}
        style={{ backgroundColor: selectedColor }}
        onClick={handleClick}
      >
        {selectedColor ? (
          <div>{isCopied ? "Copied!" : "Click to Copy: " + selectedColor}</div>
        ) : (
          "Please select a color from above"
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
