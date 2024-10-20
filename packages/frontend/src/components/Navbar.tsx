const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <a href="/" className="text-white hover:text-gray-400">
            Example Home
          </a>
        </li>
        <li>
          <a href="/example/1" className="text-white hover:text-gray-400">
            Example Details
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
