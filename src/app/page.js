'use client'

const { default: About } = require("./components/AboutUs");
const { default: Hero } = require("./components/Hero");
const { default: Marquee } = require("./components/Marquee");
const { default: ProjectDisplay } = require("./components/ProjectDisplay");
const { default: RandomText } = require("./components/RandomText");

export default function HomePage() {
    return <main>
        <div className="relative">
            {/* <video className="absolute top-0  object-cover z-0 opacity-65 h-full" src='13495-248644905.mp4' muted autoPlay playsInline loop  /> */}
            <Hero />
        </div>
        <Marquee />
        <ProjectDisplay />
        <RandomText />
        <About />

    </main>
}





