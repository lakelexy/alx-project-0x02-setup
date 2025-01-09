// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "../../interfaces"; // Import the PostProps interface

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg shadow p-4 bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <p className="text-gray-500 mt-4 text-sm">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
