import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outlined" | "danger";
}

function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    outlined: "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    danger: "text-white border hover:bg-transparent bg-red-600 hover:text-red-500 hover:border-red-500",
  };

  const _className = twMerge(
    variantClasses[variant],
    "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all",
    className
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
