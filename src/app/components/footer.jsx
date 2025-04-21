import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'
import { SiPeerlist } from "react-icons/si";
const Footer = () => {



    return <>
        <footer className='py-10 px-4 bg-black border-t border-gray-700  flex items-center justify-start relative'>
            <div className='absolute right-24 top-4   inline-flex gap-4'>
                <a href="https://wa.me/918126687562"><FaWhatsapp size={22} />  </a>
                <a href="https://x.com/AyushGairo14362" > <FaXTwitter size={22} /></a>
                <a href="https://www.instagram.com/that_man_006/"><FaInstagram size={22} /></a>
                <a href="https://peerlist.io/ayushgairola">
                    <SiPeerlist size={22} />
                </a>
                <a href="www.linkedin.com/in/ayush-gairola-7a536a327">
                    <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/Ayushgairola6">
                    <FaGithub size={22} />
                </a>
            </div>
            <h6 className="font-cosiTimes font-bold text-xl"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">Ayush</span></h6>
            {/* <div className='flex  items-center justify-between py-2 px-12 w-72'>
                <a className='hover:underline text-sm' href="">About</a>
                <a className='hover:underline text-sm' href="">Services</a>
                <a className='hover:underline text-sm' href="mailto:ayushgairola2002@gmail.com?subject=Hello&body=Hi i want to collaborate with you." >Contact</a>
            </div> */}


        </footer>
    </>
}

export default Footer;