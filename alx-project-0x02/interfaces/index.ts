// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

export interface ButtonProps {
  size: "small" | "medium" | "large"; // Defines the size options for the button
  shape: "rounded-sm" | "rounded-md" | "rounded-full"; // Defines the shape options for the button
}
