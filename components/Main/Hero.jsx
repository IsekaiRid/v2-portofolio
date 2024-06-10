"use client";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Button from '../UI/Button';
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Delevoper', 'Desain', 'Studen', 'Front End'],
    loop: {},
  })

  return (
    <section className="relative dark:bg-gray-100 dark:text-gray-800 text-white md:mt-1 mt-10">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="rotate-180 absolute top-[-250px] h-full w-full left-0 object-cover z-[1]"
          loop
          muted
          autoPlay
        >
          <source src="./blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className="container relative flex flex-col justify-center p-6 w-screen px-24 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between z-[25] bg-opacity-0">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left bg-opacity-0">
          <h1 className="text-md font-bold leading-none sm:text-6xl">
            Hai
            <motion.span
              className="inline-block w-24"
              animate={{
                rotate: [0, 20, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              👋
            </motion.span>
            Ridhwan Sulaiman
          </h1>
          <div className='container text-md font-bold leading-none sm:text-5xl mb-4'>
            <h1>I am a <span>{text}</span>
              <Cursor cursorColor='blue' /></h1>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" >
            <Button href='#about'>About</Button>
            <Button href='#skill'>Skill</Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:p-6 mb:ml-60 lg:mt-0">
          <img src="https://th.bing.com/th/id/OIG4.c8MG6kp_zKlgkbT9xsJo?pid=ImgGn" alt="" className="object-contain w-full h-full max-w-md xl:max-w-sm lg:max-w-xl rounded-lg shadow-md" />
        </div>
      </div>

    </section>
  )
}

export default Hero
