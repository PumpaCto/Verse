import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Miraverse Logo" className="h-10" />
        <span className="text-xl font-bold text-white">Miraverse</span>
      </div>
      <div className="space-x-6">
        <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
        <Link to="/about" className="text-white hover:text-yellow-400">About</Link>
        <Link to="/tokenomics" className="text-white hover:text-yellow-400">Tokenomics</Link>
        <Link to="/roadmap" className="text-white hover:text-yellow-400">Roadmap</Link>
        <Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
