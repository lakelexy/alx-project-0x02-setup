// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header"; // Import the Header component

const PostsPage = () => {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Posts Page</h1>
        <p className="mt-4 text-lg text-gray-700">Here are the posts.</p>
      </div>
    </div>
  );
};

export default PostsPage;
