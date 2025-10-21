import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow">
      <Link to="/" className="text-lg font-semibold">Developer Profiles</Link>
      <Link
        to="/create"
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
      >
        + Create Profile
      </Link>
    </nav>
  );
}
