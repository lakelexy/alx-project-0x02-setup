// components/common/Card.tsx
import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-64">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
