'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <>
      {/* Hamburger button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 
                 text-primary dark:text-primary-dark
                 hover:bg-gray-100 dark:hover:bg-gray-800 
                 rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* Sliding menu */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-72 
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex flex-col p-4 mt-16 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                py-2 px-4 rounded-md transition-colors
                ${pathname === item.path 
                  ? 'bg-gray-100 dark:bg-gray-800 text-secondary dark:text-secondary-dark font-semibold'
                  : 'text-primary dark:text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800'
                }
              `}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;