import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link'
import { MdMiscellaneousServices, MdPermContactCalendar } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Sidebar = ({ setIsVisible, isVisible }) => {
  return (<>
    <motion.div
      initial={{ y: -290 }} // where it comes from
      animate={{ y: isVisible ? 9 : -290 }} // show or hide
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-black  border-b border-indigo-300 text-white font-cosiTimes absolute right-0 top-0 h-[40%] w-full flex flex-col items-start justify-start px-6 py-6 md:hidden lg:hidden gap-4 z-[999] rounded-xl text-lg shadow-lg"
    >
      <IoMdClose
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 cursor-pointer"
        size={22}
        color="white"
      />

      <ul className="flex flex-col gap-4 mt-10 w-full">
        <Link className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-between px-4 " href="/services" >Services <MdMiscellaneousServices /></Link>
        <a
          className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-between px-4 "
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:ayushgairola2002@gmail.com"
        >
          Contact <MdPermContactCalendar />
        </a>
        <a
          className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-between px-4 "
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ayush-gairola-7a536a327"
        >
          LinkedIn <FaLinkedin />
        </a>
        <a
          className="text-lg font-mono hover:text-green-400 transition duration-200 flex items-center justify-between px-4 "
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Ayushgairola6"
        >
          GitHub <FaGithub />
        </a>
      </ul>
    </motion.div>


  </>)
}

export default Sidebar;