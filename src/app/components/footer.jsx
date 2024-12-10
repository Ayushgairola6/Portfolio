import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {

    

    return <>
        <footer className='py-10 bg-white/5  flex items-center justify-evenly relative'>
            <div className='absolute right-24 top-4   inline-flex gap-4'>
                <FaWhatsapp href="https://wa.me/918126687562"/>
                <FaXTwitter href="https://x.com/AyushGairo14362" />
                <FaInstagram  />
            </div>
            <h6 className="font-cosiTimes font-bold text-xl"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">@Ayush</span></h6>
            <div className='flex  items-center justify-between py-2 px-12 w-72'>
                <a className='hover:underline text-sm' href="">About</a>
                <a className='hover:underline text-sm' href="">Services</a>
                <a className='hover:underline text-sm' href="mailto:ayushgairola2002@gmail.com?subject=Hello&body=Hi i want to collaborate with you." >Contact</a>
            </div>


        </footer>
    </>
}

export default Footer;