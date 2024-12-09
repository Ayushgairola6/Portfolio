import gsap from "gsap";
import {useEffect} from 'react';
import {FaArrowRight}from 'react-icons/fa'

const Hero = () => {

  useEffect(()=>{
         gsap.to('.btn',{
            x:60,
            duration:1,
            repeat:-1,
            ease:'power1',
            yoyo:true
         })
  },[])

  function handleMail(){
   window.location.href="mailto:ayushgairola2002@gmail.com?subject=Hello&body=Hi i want to collaborate with you.";
 }

    return <>
        <main className="   flex items-center justify-center  relative h-screen text-center">
          
          <div>
          <h1 className="font-cosiAzure text-6xl sm:text-6xl md:text-8xl lg:text-9xl z-10 ">"Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ">Ideas</span>",
                Our Expertise-</h1>
             <h2 className="hover:underline  text-2xl mt-2 absolute right-6 font-cosiTimes">Building Digital Solutions That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 ">inspire</span></h2>
          </div>
           

             <button onClick={handleMail} className="btn absolute left-24 bottom-16 py-1 px-4 hover:bg-white hover:text-black font-semibold font-serif border rounded-full animate-pulse flex items-center justify-center gap-1">Connect <FaArrowRight/></button>
        </main>

    </>
}

export default Hero;