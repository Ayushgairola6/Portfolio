import Link from 'next/link';
import gsap from 'gsap';
import Sidebar from './Sidebar'
import { IoMenu } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { MdPermContactCalendar } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import { MdMiscellaneousServices } from "react-icons/md"
const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        gsap.fromTo('.logo',
            { x: -100, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1, ease: "back.inOut(1.7)"
        }
        )

    }, [])

    useEffect(() => {
        gsap.from(".nav-item", {
            x: 40, opacity: 0, duration: 1, ease: "back.inOut(1.7)", stagger: 0.2
        })
    }, [])


    return <>
        <header className="py-4  text-white w-full z-[1000] shadow-md overflow-hidden">
            <nav className=" mx-auto flex items-center justify-between font-cosiTimes  px-4 sm:px-6 md:px-10">

                {/* Logo */}
                <Link href='/'>
                    <h1 className="text-xl font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">
                        Ayush
                    </h1>
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    <Link className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-center gap-2" href="/services" >Services <MdMiscellaneousServices /></Link>
                    <a
                        className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:ayushgairola2002@gmail.com"
                    >
                        Contact <MdPermContactCalendar />
                    </a>
                    <a
                        className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ayush-gairola-7a536a327"
                    >
                        LinkedIn <FaLinkedin />
                    </a>
                    <a
                        className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Ayushgairola6"
                    >
                        GitHub <FaGithub />
                    </a>

                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <IoMenu
                        onClick={() => setIsVisible(!isVisible)}
                        className="cursor-pointer"
                        size={32}
                        color="white"
                    />
                </div>
            </nav>

            {/* Sidebar */}
            <Sidebar setIsVisible={setIsVisible} isVisible={isVisible} />
        </header>



    </>
}

export default Navbar;