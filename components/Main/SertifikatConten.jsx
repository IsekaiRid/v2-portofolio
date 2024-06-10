"use client";
import { motion } from "framer-motion";
import React, { useState } from 'react';


const SertifikatConten = () => {
    const [isTapped, setIsTapped] = useState(false);

    const handleTap = () => {
      setIsTapped(!isTapped);
    };
    return (
        <div id='sertifikat' className='justify-center top-0 left-0 w-full h-full text-white columns-1 z-[25] mb-4'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-4xl font-Seymour_One'>Project Me</h1>
                <p className='font-bold text-md font-kanit mx-5'>Ini adalah proyek yang saya kerjakan pada waktu luang saya untuk menambah pengalaman saya dalam dunia pemrograman</p>
            </div>
            <div className='justify-center items-center mt-10 mb-3 px-36 h-96'>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
                    <motion.img whileHover={{ rotate:10 }}
                        src='./sertifikat1.png' alt='sertifikat' className={isTapped ? 'rounded-md' : 'rounded-md tapped'}
                        style={{ width: isTapped ? '100%' : '90%', transition: 'width 0.5s ease' }}
                        onClick={handleTap} />
                    <motion.img whileHover={{ rotate:10 }}
                        src='./sertifikat2.png' alt='sertifikat' className={isTapped ? 'rounded-md' : 'rounded-md tapped'}
                        style={{ width: isTapped ? '100%' : '90%', transition: 'width 0.5s ease' }}
                        onClick={handleTap} />
                    <motion.img whileHover={{ rotate:10 }}
                        src='./sertifikat3.png' alt='sertifikat' className={isTapped ? 'rounded-md' : 'rounded-md tapped'}
                        style={{ width: isTapped ? '100%' : '90%', transition: 'width 0.5s ease' }}
                        onClick={handleTap} />
                    <motion.img whileHover={{ rotate:10 }}
                        src='./sertifikat4.png' alt='sertifikat' className={isTapped ? 'rounded-md' : 'rounded-md tapped'}
                        style={{ width: isTapped ? '100%' : '90%', transition: 'width 0.5s ease' }}
                        onClick={handleTap} />
                </div>
            </div>
        </div>
    )
}

export default SertifikatConten
