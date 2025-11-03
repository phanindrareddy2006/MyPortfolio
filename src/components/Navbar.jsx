import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">MyPortfolio</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/skills" className="hover:text-blue-400">Skills</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}
