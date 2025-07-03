import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Aditi's Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;