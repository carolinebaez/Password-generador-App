import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const evaluateStrength = (
    password: string
  ): { level: string; bars: number } => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      numberCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      specialCharCriteria,
    ].filter(Boolean).length;

    switch (criteriaMet) {
      case 5:
        return { level: "STRONG", bars: 4 };
      case 4:
        return { level: "MEDIUM", bars: 3 };
      case 3:
        return { level: "WEAK", bars: 2 };
      default:
        return { level: "TOO WEAK", bars: 1 };
    }
  };

  const { level, bars } = evaluateStrength(password);

  return (
    <div className="password-strength-container">
      <span className="strength-label">STRENGTH</span>
      {password && (
        <span
          className={`strength-level ${level.toLowerCase().replace(" ", "-")}`}
        >
          {level}
        </span>
      )}
      <div className="strength-bars">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`bar ${
              password && index < bars
                ? level.toLowerCase().replace(" ", "-")
                : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrength;
