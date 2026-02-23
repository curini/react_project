import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/welcome" className="hover:underline">
            Welcome
          </Link>
        </li>
      </ul>
    </nav>
  );
}
