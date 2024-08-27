"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo.svg";
import LoginoutBtn from "./LoginoutBtn";

// components
// Uncomment when supabase auth ready
// import Profile from './Profile';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar-css">
      <div className="dropdown">
        {/*Responsive burger navbar*/}
        <div
          tabIndex={0}
          role="button"
          className="btn border-transparent bg-transparent lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-slate-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href="/create-book"
              className={pathname.startsWith("/create-book") ? "active" : ""}
            >
              Create Book
            </Link>
          </li>
          <li>
            <Link
              href="/library"
              className={pathname.startsWith("/library") ? "active" : ""}
            >
              Library
            </Link>
          </li>
          <li>
            <Link href="/guide">Guide</Link>
          </li>
          <li>
            <LoginoutBtn />
          </li>
        </ul>
      </div>

      {/* navbar for lg screens */}
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              priority={1}
              src={Logo}
              alt="Smart Storytime"
              width={230}
              quality={100}
            />
          </Link>
        </div>

        {/* Links in the center */}
        <div className="navbar-links">
          <Link
            href="/create-book"
            className={pathname.startsWith("/create-book") ? "active" : ""}
          >
            Create book
          </Link>
          <Link
            href="/library"
            className={pathname.startsWith("/library") ? "active" : ""}
          >
            Library
          </Link>
          <Link href="/guide">Guide</Link>
        </div>

        {/* Profile/Account Section */}
        <div className="navbar-account">
          {/* Comment when supabase auth ready */}
          <LoginoutBtn />
          {/* Uncomment when supabase auth ready */}
          {/* <Profile /> */}
        </div>
      </div>
    </nav>
  );
}
