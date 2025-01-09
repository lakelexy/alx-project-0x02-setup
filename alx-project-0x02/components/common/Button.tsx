// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces"; // Import the ButtonProps interface

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  // Define size classes
  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-6 text-base",
    large: "py-4 px-8 text-lg",
  };

  // Define shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  // Combine size and shape classes
  const buttonClasses = `${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
