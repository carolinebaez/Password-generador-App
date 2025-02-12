import React, { useState } from "react";
import ShapeIcon from "./assets/shape.svg";

interface PasswordDisplayProps {
  password: string;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 4000);
    }
  };

  return (
    <div className="password-container">
      <span className={`password-text ${!password ? "default-text" : ""}`}>
        {password || "P4$5W0rD!"}
      </span>
      <button
        className="copy-button"
        onClick={handleCopy}
        aria-label="Copiar contraseña"
        disabled={!password}
      >
        {isCopied && <span className="copied-text">COPIED</span>}
        <img src={ShapeIcon} alt="Icono copiar" />
      </button>
    </div>
  );
};

export default PasswordDisplay;
