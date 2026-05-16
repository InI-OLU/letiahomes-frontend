import React from "react";

type InputFieldProps = {
  label: string;
  icon: React.ReactNode;
  error?: string;
  type?: string;
  placeholder?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  rightElement?: React.ReactNode;
};

const InputField = ({
  label,
  icon,
  error,
  type = "text",
  placeholder,
  inputProps,
  rightElement,
}: InputFieldProps) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <div className={`input-wrapper ${error ? "input-error" : ""}`}>
      <input
        type={type}
        placeholder={placeholder ?? label}
        className="input-field"
        {...inputProps}
      />
      <span className="input-icon-right">{rightElement ?? icon}</span>
    </div>
    {/* Conditional rendering: only show error message when one exists */}
    {error && <p className="error-text">{error}</p>}
  </div>
);

export default InputField;
