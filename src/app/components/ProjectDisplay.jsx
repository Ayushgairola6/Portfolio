import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

const ProjectDisplay = () => {
  const projects = [
    {
      id: "1",
      Image:
        "Earthling.jpeg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://earthling.netlify.app"
    },
    {
      id: "2",
      Image:
        "MoonEx.jpeg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://moonex2.netlify.app"
    },
    {
      id: "3",
      Image:
        "Yibee.jpeg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://yibee-frontend.vercel.app"
    },
    {
      id: "4",
      Image:
        "DevPortfolio.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://ayushgairola6.github.io/Fron-End-portfolio-project/"
    },
    {
      id: "5",
      Image:
        "YibeeOnrender.jpeg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://ayushgairola6.github.io/Working-website-project/"
    },
    {
      id: "6",
      Image:
        "Store.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint eligendi, modi voluptate ducimus maiores reiciendis possimus dolore hic id.",
        link:"https://fidgett.netlify.app"
    },
  ];

  return (
    <>
      <span className="text-center font-cosiTimes text-3xl flex items-center justify-center my-10 hover:underline">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Our </span>  Projects
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
