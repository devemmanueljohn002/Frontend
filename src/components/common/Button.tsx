import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "outline";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading = false,
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-900",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline:
      "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
