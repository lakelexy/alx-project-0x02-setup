import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]); // State to hold posts

  const openModal = () => setIsModalOpen(true); // Open modal
  const closeModal = () => setIsModalOpen(false); // Close modal

  const handleSavePost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]); // Add new post to the list
  };

  return (
    <div>
      <Header /> {/* Use the Header component */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the home page of our site.
        </p>

        <button
          className="mb-6 bg-blue-600 text-white p-3 rounded"
          onClick={openModal} // Open the modal when clicked
        >
          Add New Post
        </button>

        {/* Render Post Cards dynamically */}
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}

        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSavePost} // Pass the function to save the post
        />
      </div>
    </div>
  );
};

export default HomePage;
