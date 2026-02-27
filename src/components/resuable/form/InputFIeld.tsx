import React from "react";
import type {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<T>;
  error?: FieldError;
  placeholder?: string;
  disabled?: boolean;
  rules?: object;
  className?: string;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  disabled = false,
  rules,
  className = "",
}: InputFieldProps<T>) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, rules)}
        className={`px-4 py-2 border rounded-lg outline-none transition-all duration-200
        ${error ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:ring-2 focus:ring-blue-200"}
        disabled:bg-gray-100 disabled:cursor-not-allowed`}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
