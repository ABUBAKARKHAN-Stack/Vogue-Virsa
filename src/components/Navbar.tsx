"use client";

import { AlignRight, ShoppingCart, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { text: "Home", href: "/" },
        { text: "Products", href: "/products" },
        { text: "Categories", href: "/categories" },
        { text: "Wishlist", href: "/wishlist" },
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight / 5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 z-50 w-full h-12  text-white transition-all duration-300 
                ${isScrolled ? "bg-[#0000009c] backdrop-blur-md shadow-lg" : "bg-transparent"}
            `}
        >


            <div className="flex justify-between px-6 mx-auto items-center w-full max-w-6xl">
                {/* Centered Logo */}

                <Image src="/vv-logo.png" alt="Vogue Virsa Logo" height={96} width={96} />

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-x-8 text-sm uppercase tracking-wide">
                    {navItems.map(({ text, href }, i) => (
                        <li key={i} className="hover:text-gray-300 transition duration-300">
                            <NavLink href={href}>{text}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex gap-x-6">
                    <User className="w-5 h-5 text-gray-300 hover:text-white transition-transform duration-150 ease-linear hover:scale-110 cursor-pointer" />
                    <ShoppingCart className="w-5 h-5 text-gray-300 hover:text-white transition-transform duration-150 ease-linear hover:scale-110 cursor-pointer" />
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <AlignRight strokeWidth={2.5} className="w-7 h-7 text-white cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-[#000000b1] px-4 border-r border-dashed backdrop-blur-lg text-white">
                            <SheetTitle></SheetTitle>
                            <Image src="/vv-logo.png" alt="Vogue Virsa Logo" height={96} width={96} />
                            <ul className="mt-5 flex flex-col gap-y-6">
                                {navItems.map(({ text, href }, i) => (
                                    <li key={i}>
                                        <NavLink href={href}>{text}</NavLink>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 flex flex-col gap-y-4">
                                <div className="flex items-center gap-x-4">
                                    <User className="w-6 h-6 text-white" />
                                    <span className="text-lg hover:text-gray-300 transition">Sign In</span>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <ShoppingCart className="w-6 h-6 text-white" />
                                    <span className="text-lg hover:text-gray-300 transition">Cart</span>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
