import React, { useState } from "react";
import AppName from "./AppName";
import PasswordDisplay from "./PasswordDisplay";
import PasswordStrength from "./PasswordStrength";
import CheckboxList from "./CheckboxList";
import CharacterSlider from "./CharacterSlider";
import "./App.css";

const CHAR_SETS = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: '!@#$%^&*(),.?":{}|<>',
};

const App: React.FC = () => {
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(0);
  const [options, setOptions] = useState({
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterLength(Number(e.target.value));
  };

  const generatePassword = () => {
    const availableChars = [
      options.includeLowercase && CHAR_SETS.lowercase,
      options.includeUppercase && CHAR_SETS.uppercase,
      options.includeNumbers && CHAR_SETS.numbers,
      options.includeSymbols && CHAR_SETS.symbols,
    ]
      .filter(Boolean)
      .join("");

    if (!availableChars) {
      setPassword("");
      return;
    }

    const generatedPassword = Array.from({ length: characterLength }, () =>
      availableChars.charAt(Math.floor(Math.random() * availableChars.length))
    ).join("");

    setPassword(generatedPassword);
  };

  return (
    <div className="app-container">
      <AppName />
      <PasswordDisplay password={password} />
      <div className="container">
        <h2>Character Length</h2>
        <CharacterSlider
          characterLength={characterLength}
          handleSliderChange={handleSliderChange}
        />
        <CheckboxList
          options={[
            {
              label: "Include Uppercase Letters",
              value: options.includeUppercase,
              onChange: () => handleOptionChange("includeUppercase"),
            },
            {
              label: "Include Lowercase Letters",
              value: options.includeLowercase,
              onChange: () => handleOptionChange("includeLowercase"),
            },
            {
              label: "Include Numbers",
              value: options.includeNumbers,
              onChange: () => handleOptionChange("includeNumbers"),
            },
            {
              label: "Include Symbols",
              value: options.includeSymbols,
              onChange: () => handleOptionChange("includeSymbols"),
            },
          ]}
        />
        <PasswordStrength password={password} />
        <button className="action-button" onClick={generatePassword}>
          GENERATE ⭢
        </button>
      </div>
    </div>
  );
};

export default App;
