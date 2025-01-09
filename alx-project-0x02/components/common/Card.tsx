// components/common/Card.tsx
import { CardProps } from "../../interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
