import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const currentPath = router.pathname;
    const [scrolled, setScrolled] = useState(false);

    const routes = {
        "/": "Home",
        "/about": "About Me",
        "/portfolio": "Portfolio",
    };

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    return (
        <nav
            className={`bg-[#262626] text-white uppercase fixed top-0 w-full p-4 text-lg md:text-[2rem] py-4 md:py-[2rem] duration-300 z-50 ${scrolled ? "shadow-2xl" : "duration-700"}`}
        >
            {scrolled ? (
                <div className={`flex justify-center md:justify-start md:ml-[5rem] gap-1 text-[1.5rem] md:text-[3rem] transition-all duration-300`}>
                    <div className="font-bold">BRANDON</div>
                    <div className="font-light">LOZANO</div>
                </div>
            ) : (
                <ul className="flex justify-center gap-6 md:gap-[8rem] items-center">
                    {Object.keys(routes).map((route, idx) => (
                        <li key={idx} className="transition-all duration-500 hover:-translate-y-1">
                            <Link
                                href={route}
                                className={`border-b-2 ${currentPath === route ? "border-white" : "border-transparent"} hover:border-white transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                {routes[route]}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
