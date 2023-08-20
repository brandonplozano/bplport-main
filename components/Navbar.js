import React, { useState, useEffect } from 'react';
import Link from "next/link"
import Image from "next/image"
import {useRouter} from 'next/router'
import logo from '../public/images/pic2.png'


export default function Navbar() {
    const router = useRouter();
    const currentPath = router.pathname;

    const [scrolled, setScrolled] = useState(false);

    const routes = {
        "/" : "Home",
        "/about" : "About Me",
        "/internship" : "Internship",
        "/college" : "College",
        "/portfolio" : "Portfolio",
    }

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
    style={{ zIndex: 100 }}
    className={`bg-[#262626] text-white uppercase flex fixed top-0 p-2 text-[3rem] py-[2rem] duration-300 ${scrolled ? "shadow-2xl" : "duration-700"}`}>
            {scrolled ? (
                <>
                    <div className={`flex flex-row w-screen gap-1 text-white text-[3rem] ml-[22rem] transition duration-300`}>
                        <div className='font-bold'>BRANDON</div>
                        <div className='font-light'>LOZANO</div>
                    </div>
                </>
            ) : <>
                    <ul className="flex flex-row w-screen gap-[8rem] items-center justify-center">
                        {Object.keys(routes).map((route, idx) => { 
                            return (
                                <li className="flex" key={idx}>
                                    {currentPath == route ? (
                                        <>
                                            <Link 
                                                href={route}
                                                className="border-b-2 transition hover:-translate-y-1 duration-300"
                                            >
                                                {routes[route]}
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link 
                                                href={route}
                                                className="border-b-2 border-transparent hover:border-white
                                                transition hover:-translate-y-1 duration-300"
                                            >
                                                {routes[route]}
                                            </Link>
                                        </>
                                    )}
                                </li>
                            )
                        })}
                    </ul> 
                </>
            }
    </nav>
  )
}
