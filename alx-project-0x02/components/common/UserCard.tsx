// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces"; // Import UserProps interface

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700 mt-2">Email: {email}</p>
      <p className="text-gray-700 mt-2">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
