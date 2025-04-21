import { gsap } from "gsap";
import Image from "next/image";
import { useState } from "react";
import surge from '../../assets/Surge.png';
import yibee from '../../assets/Yibee.png';
import mendai from '../../assets/MendAI.png'
import { VscLiveShare } from "react-icons/vsc";
const ProjectDisplay = () => {
  const projects = [
    {
      id: "1",
      title: 'Surge',
      Image:
        surge,
      description:
        "Surge is a networking platform specifically designed for individuals seeking dating-related advice. It provides a focused, niche environment where users can access various tips and guidance without having to search multiple sources. The platform organizes posts into categories like 'Red Flags', 'Green Flags', and 'First Date Stories', making it easier for users to explore and learn about different aspects of dating. Additionally, a real-time communication feature using socket.io allows users to connect with people whose posts they find the most engaging, adding a personal touch.",
      link: "https://surge-lake.vercel.app"
    },
    {
      id: "2",
      title: "MendAI",
      Image:
        mendai,
      description:
        "MendAI is an AI-powered companion designed for individuals who struggle to share their thoughts and feelings. Whether due to shyness, introversion, or fear of judgment, MendAI acts as a virtual friend that listens empathetically to everything users express. It provides responses based on emotion detection, fostering a supportive environment for self-expression. The platform also includes real-time communication with socket.io along with JWT and OAuth-based authentication using cookies for secure data transactions. (Currently in beta stage)",
      link: "https://mendai.netlify.app"
    },
    {
      id: "3",
      title: "Yibee",
      Image:
        yibee
      ,
      description:
        "Yibee is an innovative combination of social networking and music streaming platforms. It aims to address attention retention challenges by allowing users to listen to music and share updates within a single app, thereby reducing the need to switch between multiple applications. Yibee also employs a JWT-based authentication system to ensure secure data transfers.The component based structure of the app enables it to look diffrent of different screen sizes making it extremely user friendly and engaging ",
      link: "https://yibee-frontend.vercel.app"
    }
  ];

  return (
    <>
      <span className="text-center font-cosiTimes text-3xl flex items-center justify-center my-10 hover:underline">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text"></span>  Projects
      </span>
      <section className=" flex flex-wrap gap-6 p-4 justify-center">
        {projects.map((pro) => (
          <div
            key={pro.id}
            className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] p-1 rounded-lg bg-white/10  overflow-hidden h-fit"
          >
            {/* Blurred Gradient Border */}
            <div className="absolute inset-0 rounded-lg bg-[conic-gradient(from_0deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] blur-lg opacity-0 group-hover:opacity-100 group-hover:animate-spin pointer-events-none"></div>

            {/* Card Content */}
            <div className="relative z-10 bg-black rounded-lg flex flex-col  p-4">
              <div className="relative w-full h-52 rounded-md mb-3 border border-white/10 overflow-hidden ">
                <Image
                  src={pro.Image}
                  alt={`${pro.title} screenshot`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>


              <h2 className="font-cosiTimes text-xl text-center text-transparent bg-clip-text  mb-2">
               <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text font-bold">{pro.title}</span> 
              </h2>

              {/* Clamped description: no scrollbar, max 4 lines */}
              <p className="text-white text-md font-serif text-center mb-4 line-clamp-auto">
                {pro.description}
              </p>

              {/* Button snug below text */}
              <div className="flex justify-center items-center  mt-3 w-full">
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-2 text-lg font-bold font-mono text-black bg-white rounded-full hover:bg-black hover:text-white hover:border-white border transition-all duration-200 flex justify-center items-center gap-3"
                >
                  LIVE
                  <VscLiveShare />

                </a>
              </div>
            </div>
          </div>
        ))}
      </section>


    </>
  );
};

export default ProjectDisplay;
