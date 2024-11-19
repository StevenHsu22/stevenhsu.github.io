"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SideNav() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  // const navClass = isAboutPage ? 'text-black' : 'text-white';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navClass = isMenuOpen ? 'text-white' : isAboutPage ? 'text-black' : 'text-white';

  return (
    <div>
      <nav className={`flex items-center justify-between w-full h-full p-6 relative box-border ${navClass}`}>
        <Link className="steven-hsu" href="./" onClick={closeMenu}>
          Steven Hsu
        </Link>

        <button
          type="button"
          className="header__button md:hidden"
          onClick={toggleMenu}
        >
          <span className={`header__menu ${isMenuOpen ? 'hidden' : ''} ${navClass}`}>menu</span>
          <span className={`header__close ${isMenuOpen ? '' : 'hidden'} ${navClass}`}>close</span>
        </button>

        <nav className={`header__nav md:hidden ${isMenuOpen ? "open" : ""}`}>
          <ol className="header__list">
            <li className="header__item">
              <Link href="./#home" className="header__link" onClick={closeMenu}>
                <span className="header__text">Home</span>
              </Link>
            </li>
            <li className="header__item">
              <Link href="./#aboutme" className="header__link" onClick={closeMenu}>
                <span className="header__text">About</span>
              </Link>
            </li>
            <li className="header__item">
              <Link href="./#works" className="header__link" onClick={closeMenu}>
                <span className="header__text">Works</span>
              </Link>
            </li>
            <li className="header__item">
              <Link href="./#contact" className="header__link" onClick={closeMenu}>
                <span className="header__text">Contact</span>
              </Link>
            </li>
            <li className="header__item">
            <Link
              href="https://www.linkedin.com/in/steven-hsu-b7a705289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm nav-icon"
            >
              <img
                src="/LI-In-Bug.png"
                alt="linkedin"
                className="h-5 w-6 filter"
              />
            </Link>
            </li>
            <li className="header__item">
            <Link
              href="https://github.com/StevenHsu22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm nav-icon"
            >
              <img
                src={`/github-mark-${navClass}.svg`}
                alt="GitHub"
                className="h-6 w-6 filter hue-rotate-90"
              />
            </Link>
            </li>
          </ol>
          
          
        </nav>



      <div className="flex space-x-8 ml-auto hidden md:flex">
        <Link
          href="https://www.linkedin.com/in/steven-hsu-b7a705289/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm nav-item"
          style={{
            padding: "3px 0 0 0"
          }}
        >
          <img
            src="/LI-In-Bug.png"
            alt="linkedin"
            className="h-5 w-6 filter"
          />
        </Link>
        <Link
          href="https://github.com/StevenHsu22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm nav-item"
        >
          <img
            src={`/github-mark-${navClass}.svg`}
            alt="GitHub"
            className="h-6 w-6 filter hue-rotate-90"
          />
        </Link>
        <Link className="text-sm nav-item" href="./#home">
          HOME
        </Link>
        <Link className="text-sm nav-item" href="./#aboutme">
          ABOUTME
        </Link>
        <Link className="text-sm nav-item" href="./#works">
          WORKS
        </Link>
        <Link className="text-sm nav-item" href="./#contact">
          CONTACT
        </Link>
      </div>

      </nav>

      
    </div>
  );
}
