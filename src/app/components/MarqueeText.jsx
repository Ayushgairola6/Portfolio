import { gsap } from "gsap";
import { useEffect, useRef } from 'react'


const MarqueeText = () => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.to('.marquee-text', {
                x: '-100%', duration: 20, ease: 'linear', repeat: -1

            })
        }


    }, [])

    return <div className="marquee-text inline-block  text-6xl font-cosiAzure   ">
        <span>"Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Vision</span> ","Our<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 "> Code</span>".</span>

    </div>
}

export default MarqueeText;