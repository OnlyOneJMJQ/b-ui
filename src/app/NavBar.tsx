"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white w-40 fixed">
            <div className="p-4">
                <Image
                    className="w-12 h-12"
                    src="/biconomy.svg"
                    alt="Biconomy.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <nav className="flex-grow">
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                        <Link
                            href="/"
                            className={`text-gray-300 hover:text-white ${
                                pathname === "/" ? "font-bold" : ""
                            }`}
                        >
                            Feed
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/bookmarks"
                            className={`text-gray-300 hover:text-white ${
                                pathname === "/bookmarks" ? "font-bold" : ""
                            }`}
                        >
                            Bookmarks
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/profile"
                            className={`text-gray-300 hover:text-white ${
                                pathname === "/profile" ? "font-bold" : ""
                            }`}
                        >
                            My Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
