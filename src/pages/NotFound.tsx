import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-s100 p-4">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-white text-center mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-white text-teal-s500 rounded-full font-bold px-6 py-3 hover:opacity-80 transition-all"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
