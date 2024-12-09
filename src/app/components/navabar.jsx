import Link from 'next/link';
import gsap from 'gsap';
import { useEffect } from 'react';


const Navbar = () => {

    useEffect(() => {
        gsap.fromTo('.logo',
            { y: -100, opacity: 0 }, {
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
        <header>
            <nav className="flex items-center justify-evenly font-cosiTimes  py-2">
                <h1 className=" text-2xl logo">AyushGairola</h1>

                <Link className='text-xs font-mono nav-item' href='/Contact'>Contact</Link>
                <a className='text-xs font-mono nav-item' href="www.linkedin.com/in/ayush-gairola-7a536a327">LinkedIn</a>
                <a className='text-xs font-mono nav-item' href="github.com/Ayushgairola6">Github</a>

            </nav>

        </header>

    </>
}

export default Navbar;