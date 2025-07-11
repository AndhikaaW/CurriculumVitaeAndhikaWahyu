"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-6 max-w-7xl mx-auto relative">
      {/* Logo */}
      <div className="text-xl font-bold">
        <span className="text-white">Andh</span>
        <span className="text-blue-400">ikaW</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <a href="/" className="text-white hover:text-blue-400 transition-colors">Beranda</a>
        <a href="/about" className="text-white hover:text-blue-400 transition-colors">Tentang Saya</a>
        <a href="/project" className="text-white hover:text-blue-400 transition-colors">Project</a>
        <a href="/blog" className="text-white hover:text-blue-400 transition-colors">Blog</a>
      </div>

      {/* Desktop Contact Button */}
      <button className="hidden md:block border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-all">
        <a href="https://wa.me/+6282140709064">
          Hubungi Saya
        </a>
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-blue-400 transition-colors p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm md:hidden z-50 mt-2 mx-6 rounded-lg shadow-lg border border-gray-700">
          <div className="flex flex-col py-4">
            <a
              href="/"
              className="text-white hover:text-blue-400 transition-colors px-6 py-3 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-400 transition-colors px-6 py-3 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/project"
              className="text-white hover:text-blue-400 transition-colors px-6 py-3 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Project
            </a>
            <a
              href="/blog"
              className="text-white hover:text-blue-400 transition-colors px-6 py-3 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <div className="px-6 py-3">
              <button
                className="w-full border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="https://wa.me/+6282140709064">
                  Hubungi Saya
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
