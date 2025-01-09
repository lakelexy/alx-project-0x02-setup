// pages/users.tsx
import React from "react";
import Header from "@/components/layout/Header"; // Import Header component
import UserCard from "@/components/common/UserCard"; // Import UserCard component
import { UserProps } from "@/interfaces"; // Import UserProps interface

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header /> {/* Use Header component */}
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Users Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetch user data at build time using getStaticProps
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  // Map API response to match UserProps interface
  const formattedUsers = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  // Return users as props to the component
  return {
    props: {
      users: formattedUsers,
    },
  };
};

export default UsersPage;
