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
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[0.72rem] uppercase tracking-[0.08em] text-white/45 ml-24">
        {label}
      </label>

      <div
        className={`
          ml-24
          flex items-center gap-3
          border-b
          ${error ? "border-red-500" : "border-white/30"}
          focus-within:border-[#3b6ef5]
          transition-colors duration-200
          py-2
        `}
      >
        <input
          type={type}
          placeholder={placeholder ?? label}
          className="
            flex-1
            bg-transparent
            outline-none
            text-white
            placeholder:text-white/20
            text-[0.95rem]
            font-light
          "
          {...inputProps}
        />

        <span className="text-white/50 text-lg cursor-pointer">
          {rightElement ?? icon}
        </span>
      </div>

      {error && (
        <p className="text-red-400 text-[0.72rem] mt-1 ml-24">{error}</p>
      )}
    </div>
  );
};

export default InputField;