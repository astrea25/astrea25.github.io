import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

