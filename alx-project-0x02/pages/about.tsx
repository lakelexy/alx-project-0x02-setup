import React from "react";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is the about page of our site.
      </p>

      {/* Add Buttons with different sizes and shapes */}
      <div className="mt-8 flex space-x-4">
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
