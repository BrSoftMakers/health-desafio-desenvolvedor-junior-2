import React from "react";
import { Container, FormInput, FormLabel } from "./styles";

interface InputProps {
  defaultValue?: string;
  id: string;
  min?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  name?: string;
  step?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  defaultValue,
  min,
  step,
  id,
  type,
  value,
  label,
  required = true,
  name,
  placeholder,
  onChange = () => {},
}: InputProps) => {
  return (
    <Container>
      <FormLabel>{label}</FormLabel>
      <FormInput
        step={step}
        placeholder={placeholder}
        min={min}
        defaultValue={defaultValue}
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default Input;
