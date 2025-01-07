import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <h1 className="text-center text-2xl mb-4">Welcome to ALX Project 2</h1>
      <nav className="flex justify-center space-x-8">
        <Link href="/home" className="text-lg font-medium hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-lg font-medium hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
