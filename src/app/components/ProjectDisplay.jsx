import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

const ProjectDisplay = () => {
  const projects = [
    {
      id: "1",
      Image:
        "/Yibee.jpeg",
      description:
        "A full stack platform with the robust features of both a social networking platform and a music player , with features like creating , deleting posts , music streaming , personalized playlist creation , genre wise music and so on..",
      link: "https://yibee-frontend.vercel.app"
    },
    {
      id: "2",
      Image:
        "/Backend.jpeg",
      description:
        "Backend RESTful API for YIBEE (mentioned above) used Mongodb , node.js and express.js for server and database management and integrated firebase in it to store media files like music and user images for secure and cloud data storage",
      link: "https://yibee.onrender.com"
    },
    {
      id: "3",
      Image:
        "/Store.jpg"
      ,
      description:
        "A fully customizable online store with a custom  bill feature which keeps track of the amount of money being spent , saved and total discount on all purchases",
      link: "https://fidgett.netlify.app"
    },
    {
      id: "4",
      Image:
        "/DevPortfolio.jpg",
      description:
        "A Front end portfolio project inspired from AWWWARDs features portfolio , used GSAP for all the animations and smooth scrolling , with black and white theme to give it a clean look",
      link: "https://ayushgairola6.github.io/Fron-End-portfolio-project/"
    },
    {
      id: "5",
      Image:
        "/MoonEx.jpeg"
      ,
      description:
        "Design for a crypto exchange platform with color scheme and content matching it's theme and motive . Used GSAP for animation and dark color scheme with yellow elements to give it a accent of trust",
      link: "https://moonex2.netlify.app/"
    },
    {
      id: "6",
      Image:
        "/Earthling.jpeg"
      ,
      description:
        "A platform to Spread awareness about environment protection , with sleek design and minimal animations to engage users and grab their attention . Tech Used:GSAP , react , tailwind",
      link: "https://earthling.netlify.app"
    },
  ];

  return (
    <>
      <span className="text-center font-cosiTimes text-3xl flex items-center justify-center my-10 hover:underline">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">Our </span>  Projects
      </span>
      <section className="min-h-screen flex flex-wrap gap-6 p-4 justify-center">
        {projects.map((pro) => {
          return (
            <div
              key={pro.id}
              className="group relative w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] p-1 rounded-lg bg-white/10 overflow-hidden"
            >
              {/* Blurred Gradient Border */}
              <div className="absolute inset-0 rounded-lg bg-[conic-gradient(from_0deg,#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-spin"></div>

              {/* Card Content */}
              <div className="relative z-10  bg-black rounded-lg ">
                <Image
                  className="w-full h-52 object-cover rounded-md mb-4"
                  src={pro.Image}
                  alt="image"
                  height={208}
                  width={208}
                />
                <span className="font-cosiAzure text-xl text-center flex items-center justify-center"> Title</span>
                <p className="text-white font-serif text-center">{pro.description}</p>
                <button className="p-1 px-6 m-2 self-end text-black  bg-white font-bold font-mono rounded-full hover:bg-black/15 hover:text-white hover:border"> <a href={pro.link}>LIVE</a></button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProjectDisplay;
