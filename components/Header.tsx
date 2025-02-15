import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;