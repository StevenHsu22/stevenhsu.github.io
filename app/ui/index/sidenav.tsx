"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // 切换菜单状态
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // 点击外部区域关闭菜单
  const handleClickOutside = (event: MouseEvent) => {
    // 如果菜单打开且点击事件发生在菜单外部，关闭菜单
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex w-full items-center justify-between py-4">
      <Link className="text-white ml-4" href="/">
        Steven Hsu
      </Link>

      <div className="flex space-x-4 mr-4">
        <Link className="text-white" href="#section1">
          Section 1
        </Link>
        <Link className="text-white" href="#section2">
          Section 2
        </Link>
        <Link className="text-white" href="#section3">
          Section 3
        </Link>
      </div>

      <div className="relative" ref={menuRef}> {/* 将 menuRef 添加到外部 div */}
        <button 
          className="text-white" 
          onClick={toggleMenu}
        >
          Menu
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <Link className="block px-4 py-2 text-black hover:bg-gray-200" href="/">Home</Link>
            <Link className="block px-4 py-2 text-black hover:bg-gray-200" href="/about">About Me</Link>
            <Link className="block px-4 py-2 text-black hover:bg-gray-200" href="/work">Work</Link>
            <Link className="block px-4 py-2 text-black hover:bg-gray-200" href="/contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
