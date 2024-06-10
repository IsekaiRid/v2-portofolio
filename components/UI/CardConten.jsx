"use client";

import React from 'react'
import { motion } from 'framer-motion';

const CardConten = ({ children, imgSrc, altText, JudulCard }) => {

    return (
        <motion.div
        className='z-[25]'
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}>
            <div className="relative drop-shadow-xl w-72 h-96 overflow-hidden rounded-xl bg-[#3d3c3d]">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="absolute w-full h-full object-cover rounded-xl"
                />
                <div className=" font-freeman absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] flex-col text-center px-3">
                    <h1 className='text-lg text-white font-bold  font-Seymour_One'>{JudulCard}</h1>
                    {children}
                </div>
                <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
            </div>
            </motion.div>
    )
}

export default CardConten
