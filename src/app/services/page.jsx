import React from 'react';
import { FaFigma, FaNodeJs, FaAndroid, FaReact } from "react-icons/fa";

const Services = () => {

    const services = [
        {
            title: 'UI/UX Design',
            description: 'Crafting intuitive and engaging user experiences with modern design principles.',
            icon: < FaFigma size={45} />,
        },
        {
            title: 'Frontend Development',
            description: 'Building responsive and performant interfaces with React, Tailwind CSS, and modern JS.',
            icon: <FaReact size={45} />,
        },
        {
            title: 'Backend Development',
            description: 'Designing robust APIs and scalable databases using Node.js, Express, and PostgreSQL.',
            icon: <FaNodeJs size={45} />,
        },
        {
            title: 'App Development ',
            description: 'Creating cross-platform mobile experiences with React Native and optimized performance.',
            icon: < FaAndroid size={45} />,
        }
    ];


    return (
        <div className="min-h-screen bg-black text-white">
            {/* Variant 1: Grid Cards */}
            <section className="py-24 px-6">
                <h1 className="text-5xl font-bold text-center  mb-12 font-cosiAzure">
                    Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>Services</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="border border-purple-400 transition p-8 rounded-2xl shadow-xl flex flex-col items-center text-center"
                        >
                            {service.icon}
                            <h3 className="mt-6 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                {service.title}
                            </h3>
                            <p className="mt-4 text-gray-300">
                                {service.description}
                            </p>
                            <a href="https://wa.me/918126687562">
                                <button className="mt-6 px-5 py-2 border border-transparent rounded-full border-white hover:bg-white hover:text-black font-medium hover:opacity-90 transition-all duration-200 hover:scale-105">
                                    Schedule A Meeting
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}


export default Services;