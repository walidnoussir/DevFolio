"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="">
      <div
        style={{ backgroundColor: "var(--color-surface-container-high)" }}
        className="max-w-[1200px] mx-auto my-3 rounded-xl px-6 h-14 flex items-center justify-between shadow-lg"
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ color: "var(--color-on-surface)" }}
          className="font-bold text-[17px] tracking-tight shrink-0"
        >
          DevPortfolio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: active
                      ? "var(--color-on-surface)"
                      : "var(--color-on-surface-variant)",
                  }}
                  className="relative text-[14px] font-medium tracking-wide transition-colors duration-200 hover:text-[color:var(--color-on-surface)] group pb-1"
                >
                  {label}
                  <span
                    style={{ backgroundColor: "var(--color-primary)" }}
                    className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-opacity duration-200 ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-40"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Button */}
          <button
            aria-label="Toggle theme"
            style={{ color: "var(--color-on-surface-variant)" }}
            className="hover:text-[color:var(--color-on-surface)] transition-colors duration-200 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          </button>

          {/* Download CV */}
          <a
            href="/cv/resume.pdf"
            download
            style={{
              backgroundColor: "var(--color-primary-container)",
              color: "var(--color-on-surface)",
            }}
            className="px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-opacity duration-200 hover:opacity-90"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--color-on-surface)" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <>
                <rect y="3" width="20" height="2" rx="1" />
                <rect y="9" width="20" height="2" rx="1" />
                <rect y="15" width="20" height="2" rx="1" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--color-surface-container-high)",
            borderTop: "1px solid var(--color-outline-variant)",
          }}
          className="md:hidden mx-3 rounded-b-xl px-6 pb-5"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      color: active
                        ? "var(--color-primary)"
                        : "var(--color-on-surface-variant)",
                    }}
                    className="text-[15px] font-medium"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="/cv/resume.pdf"
            download
            style={{
              backgroundColor: "var(--color-primary-container)",
              color: "var(--color-on-surface)",
            }}
            className="mt-5 inline-block px-5 py-2 rounded-full text-[13px] font-semibold"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
