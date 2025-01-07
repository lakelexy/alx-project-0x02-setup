// components/common/PostModal.tsx
import { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

const PostModal = ({ isOpen, onClose, onSave }: PostModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(title, content); // Pass data to parent
    onClose(); // Close modal after save
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white p-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
