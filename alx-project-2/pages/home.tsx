import Card from "../components/common/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-gray-700">
        This is the home page of our site.
      </p>

      {/* Card 1 */}
      <Card title="Card 1" content="This is the content for the first card." />

      <div className="my-4" />

      {/* Card 2 */}
      <Card title="Card 2" content="This is the content for the second card." />
    </div>
  );
};

export default HomePage;
