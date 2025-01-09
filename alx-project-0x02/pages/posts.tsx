import React from "react";
import Header from "@/components/layout/Header"; // Import the Header component
import PostCard from "@/components/common/PostCard"; // Import the PostCard component
import { PostProps } from "@/interfaces"; // Import the PostProps interface

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header /> {/* Use the Header component */}
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Posts Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetch posts data at build time
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // Map API response to match the PostProps interface
  const formattedPosts = data.slice(0, 10).map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts: formattedPosts, // Pass posts as props to the component
    },
  };
};

export default PostsPage;
