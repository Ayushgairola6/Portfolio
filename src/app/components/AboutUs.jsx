const About = () => {
    return <>
        <div className="max-h-screen h-screen text-center p-4 ">
            <div className='flex items-center justify-center mt-4 gap-6 flex-col'>
                <h4 className='text-3xl font-cosiTimes'>ABOUT <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">ME</span></h4>
                <img className='h-32 w-32 rounded-full' src="Myimage.png" alt="" />
            </div>


            <p className=" font-serif text-sm  m-auto p-6 md:text-lg">Hi,I'm Ayush Gairola, a passionate Full-Stack developer and UI/UX Designer dedicated to crafting seamless and visually stunning digital experiences and turning ideas into reality. With a strong foundation in both front-end and back-end-developement .I Bridge the gap between functionality and design to deliever user focused solutions that not only work flawlessly but also look amazing . Over the years I've honed my skills in technologies like JavaScript,React,Node.js while also mastering design tools like Figma and Adobe Xd . 
                My approach is simple :I combine clean code , modern design , and strategic thinking to build websites and applications that drive results and make an impact.
                Let's collaborate to create something extraordinary together! </p>



        </div>

    </>
}

export default About;