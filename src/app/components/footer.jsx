import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {

    function handleMail(){
        window.location.href="mailto:ayushgairola2002@gmail.com?subject=Hello&body=Hi i want to collaborate with you.";
      }

    return <>
        <footer className='py-10 bg-white/5  flex items-center justify-evenly relative'>
            <div className='absolute right-24 top-4   inline-flex gap-4'>
                <FaWhatsapp onClick={window.open('https://wa.me/918126687562')} />
                <FaXTwitter onClick={window.open('https://x.com/AyushGairo14362')} />
                <FaInstagram onClick={window.open('')} />
            </div>
            <h6 className="font-cosiTimes font-bold text-3xl"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">@Ayush</span></h6>
            <div className='flex  items-center justify-between py-2 px-12 w-72'>
                <a className='hover:underline' href="">About</a>
                <a className='hover:underline' href="">Services</a>
                <a className='hover:underline' href="" onClick={handleMail}>Contact</a>
            </div>


        </footer>
    </>
}

export default Footer;