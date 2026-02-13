export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/welcome" className="hover:underline">
            Welcome
          </a>
        </li>
      </ul>
    </nav>
  );
}
