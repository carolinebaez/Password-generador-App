import React from "react";

interface CheckboxOption {
  label: string;
  value: boolean;
  onChange: () => void;
}

interface CheckboxListProps {
  options: CheckboxOption[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options }) => {
  return (
    <ul className="custom-list">
      {options.map((option, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={option.value}
              onChange={option.onChange}
            />{" "}
            {option.label}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckboxList;
