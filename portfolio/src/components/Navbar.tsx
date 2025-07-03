import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links=['Home','About','Projects','Skills','Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
            
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-indigo-400">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-slate-800 flex flex-col items-center gap-6 py-6">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 text-lg"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
