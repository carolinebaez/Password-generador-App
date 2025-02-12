import React from "react";

interface CharacterSliderProps {
  characterLength: number;
  handleSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CharacterSlider: React.FC<CharacterSliderProps> = ({
  characterLength,
  handleSliderChange,
}) => {
  const percentage = ((characterLength - 1) / (15 - 1)) * 100;

  const greenColor = `rgb(164, 255, 175)`;

  return (
    <div className="slider-container">
      <div className="slider-value">{characterLength}</div>
      <input
        type="range"
        min="1"
        max="15"
        value={characterLength}
        onChange={handleSliderChange}
        className="slider"
        style={{
          background: `linear-gradient(to right, ${greenColor} ${percentage}%, #14131b ${percentage}%)`,
        }}
      />
    </div>
  );
};

export default CharacterSlider;
