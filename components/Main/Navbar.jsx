"use client";
import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {

    const [openNav, setOpenNav] = React.useState(false);


    return (
        <nav className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className=' flex items-center justify-between h-16'>
                    <div className=' flex items-center'>
                        <div className=' flex-shrink-0'>
                            <a href='/' className=' text-white font-bold text-lg font-Seymour_One hover:bg-[#310e68] hover:bg-gradient-to-t hover:from-[#310e68] hover:to-[#5f0f40] p-2 rounded-md'>Portofolio</a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href='#about' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>About</a>
                            <a href='#project' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Project</a>
                            <a href='#skill' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Skill</a>
                            <a href='#sertifikat' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Sertifikat</a>
                            <a href='https://github.com/IsekaiRid' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>GitHub Project</a>
                        </div>
                    </div>
                    <div className='md:hidden block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <button className='block bottom-0 md:hidden items-center' onClick={() => setOpenNav(!openNav)}>
                                <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-slate-400 relative rounded-lg ${openNav ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-slate-400 relative rounded-lg ${openNav ? 'opacity-0' : ''}`}></span>
                                <span className={`transition duration-300 ease-in-out w-[33px] h-[3px] block mb-[5px] bg-slate-400 relative rounded-lg ${openNav ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
                <motion.div
                    className={`sidebar md:hidden fixed right-0 grid grid-cols-1 h-auto pb-10 z-40 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-lg w-full transform transition ease-in-out duration-300`}
                    initial={{ x: "100%" }}
                    animate={{ x: openNav ? 0 : "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                >
                    <ul className='list-none text-white grid grid-rows-auto gap-2 ml-3'>
                        <a href='#about' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>About</a>
                        <a href='#project' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Project</a>
                        <a href='#skill' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Skill</a>
                        <a href='#sertifikat' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>Sertifikat</a>
                        <a href='https://github.com/IsekaiRid' className=' text-white hover:bg-white hover:text-black rounded-md p-2 font-kanit'>GitHub Project</a>
                    </ul>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar
