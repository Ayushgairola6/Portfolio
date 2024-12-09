'use client'

import "./globals.css";
import Navbar from '../app/components/navabar'
import Hero from "./components/Hero";
import ProjectDisplay from "./components/ProjectDisplay";
import Marquee from "./components/Marquee";
import TechMarquee from "./components/TechWeUseMarquee";
import About from "./components/AboutUs";
import Footer from "./components/footer";
import RandomText from "./components/RandomText";
import Contact from "../../pages/Contact";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white ">
      <Navbar />
        <div className="relative">
          {/* <video className="absolute top-0  object-cover z-0 opacity-65 h-full" src='13495-248644905.mp4' muted autoPlay playsInline loop  /> */}
          <Hero />
        </div>
        <Marquee />
        <ProjectDisplay />
        <RandomText/>
        <About/>
        <Footer/>
      </body>

    </html>
  );
}
