"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="fixed w-full h-16 justify-between items-center flex flex-row p-4 border-b border-gray-700">
            <div className="left-0 flex items-center">
                <Link href="/">
                    <Image
                        src="/b-logo-white.svg"
                        alt="B Logo"
                        width={37}
                        height={36}
                        priority
                    />
                </Link>
                <Link
                    href="/"
                    className={`ml-4 text-gray-300 hover:text-white ${
                        pathname === "/" ? "font-bold" : ""
                    }`}
                >
                    Feed
                </Link>
                <Link
                    href="/bookmarks"
                    className={`ml-4 text-gray-300 hover:text-white ${
                        pathname === "/bookmarks" ? "font-bold" : ""
                    }`}
                >
                    Bookmarks
                </Link>
                <Link
                    href="/profile"
                    className={`ml-4 text-gray-300 hover:text-white ${
                        pathname === "/profile" ? "font-bold" : ""
                    }`}
                >
                    My Profile
                </Link>
            </div>
            <ConnectButton />
        </div>
    );
};

export default NavBar;
