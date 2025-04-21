import Image from "next/image";
import me from '../../assets/me.jpg'
import { FaExclamation } from "react-icons/fa";
const About = () => {
    return <>
        {/* <video className="absolute top-0  object-cover z-0 opacity-65 h-full" src='13495-248644905.mp4' muted autoPlay playsInline loop  /> */}
        <div className="h-screen w-full bg-black text-white flex items-center justify-center">
    {/* Inner container for padding and centering */}
    <div className="max-w-4xl w-full px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20">
            <Image
              src={me}
              alt="Ayush Gairola"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0 md:ml-10 flex-1 text-center md:text-left">
          <h2 className="text-4xl font-cosiTimes font-bold mb-4 flex items-center justify-center gap-2">
            ABOUT{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              ME 
            </span>
            <FaExclamation size={25}/>
          </h2>
          <p className="font-serif text-base md:text-lg leading-relaxed">
            Hi, I’m <strong>Ayush Gairola</strong>. I started in civil engineering but quickly realized I wanted to build end‑to‑end solutions—web development gave me that power.
            <br /><br />
            I love creating projects that help others and exploring monetization paths. Open source fascinates me because it unites passionate contributors to continuously refine ideas. My engineering background sharpened my problem‑solving mindset, which I bring to every feature, bug fix, and code review. I’m excited to keep pushing boundaries and crafting innovative solutions that make a real impact.
          </p>
        </div>
      </div>
    </div>
  </div>

    </>
}

export default About;