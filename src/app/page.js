'use client'

const { default: About } = require("./components/AboutUs");
const { default: Hero } = require("./components/Hero");
const { default: Marquee } = require("./components/Marquee");
const { default: ProjectDisplay } = require("./components/ProjectDisplay");
const { default: RandomText } = require("./components/RandomText");

export default function HomePage() {
    return <main>    
        <Hero />
        <Marquee />
        <ProjectDisplay />
        <RandomText />
        <About />

    </main>
}





