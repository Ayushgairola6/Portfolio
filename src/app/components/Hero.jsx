import gsap from "gsap";
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {

   useEffect(() => {
      gsap.to('.btn', {
         x: 60,
         duration: 1,
         repeat: -1,
         ease: 'power1',
         yoyo: true
      })
   }, [])

   function handleMail() {
      if (typeof window !== undefined) {
         window.location.href = "mailto:ayushgairola2002@gmail.com?subject=Hello&body=Hi i want to collaborate with you.";
      }

   }

   return <>
      <main className="  flex items-center justify-center relative   h-screen text-center">

         <div className="m-auto">
            <motion.h1 animate={{ x: [0, 100, 0] }} transition={{ duration: 2 }} className="font-cosiAzure text-7xl sm:text-6xl md:text-8xl lg:text-9xl ">Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">Ideas</span>,
               Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">Expertise</span></motion.h1>
            <h2 className="hover:underline  text-2xl  absolute right-6 font-cosiTimes">Building Digital Solutions That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">inspire</span></h2>
         </div>


         <button onClick={handleMail} className="btn absolute left-20 bottom-0 py-1 px-4 hover:bg-white hover:text-black font-semibold font-serif border rounded-full animate-pulse flex items-center justify-center gap-1"><a href="mailto:ayushgairola2002@gmail.com">Connect</a>
            <FaArrowRight /></button>
      </main>

   </>
}

export default Hero;