"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
};

const NavLink: FC<Props> = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href); // Ensures active state for nested routes

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined} // Improves accessibility
            className={`relative text-xs font-light uppercase tracking-wide transition-all duration-300 group ${isActive ? "text-secondary" : "text-primary"
                } hover:text-secondary`}
        >
            {children}
            <span
                className={`absolute -bottom-0.5 left-0.5 h-[1px] bg-secondary transition-all duration-300 ${isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
            ></span>
        </Link>
    );
};

export default NavLink;
