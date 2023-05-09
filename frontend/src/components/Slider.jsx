import React from "react";

export const Slider = ({ min, max, value, handleChange, name }) => {
  return (
    <div className="sliderContainer">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        value={value}
        onChange={(e) => handleChange(e, name)}
      />
    </div>
  );
};
