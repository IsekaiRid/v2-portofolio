// AboutConten.js

import React from 'react';
import dynamic from 'next/dynamic';

const LazyCardConten = dynamic(() => import('../UI/CardConten'));

const AboutConten = () => {
    return (
        <div id='about' className='top-0 left-0 w-full h-full text-white'>
            <div className='flex justify-center'>
                <div className=' flex justify-center items-center'>
                    <h1 className='font-bold text-4xl font-Seymour_One'>
                        about me
                    </h1>
                </div>
            </div>
            <div className='flex justify-center mt-5 mb-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                    <LazyCardConten imgSrc='https://i.pinimg.com/736x/b4/72/dc/b472dcadf13657f18e7bb6be6a599267.jpg' altText='asro' JudulCard='About'>Halo, nama saya Ridhwan. Saya lahir dan besar di Kota Bandung Barat. Hobi saya adalah bermain game dan mengembangkan website, meskipun saya masih dalam proses belajar. Saya memiliki beberapa pengalaman dalam membuat proyek kecil dan membantu proyek sekolah.</LazyCardConten>
                    <LazyCardConten imgSrc='https://i.pinimg.com/736x/b4/72/dc/b472dcadf13657f18e7bb6be6a599267.jpg' altText='asro' JudulCard='Go to school'>Saya bersekolah di SMK Sangkuriang 1 Cimahi, jurusan RPL, kelas 11. Saya bersemangat belajar dan menggunakan YouTube sebagai sumber pemahaman dasar-dasar pemrograman.</LazyCardConten>
                    <LazyCardConten imgSrc='https://i.pinimg.com/736x/b4/72/dc/b472dcadf13657f18e7bb6be6a599267.jpg' altText='asro' JudulCard='Learn'>Saya mulai belajar dari YouTube dan berlatih secara mandiri di rumah. Sesekali, saya bertanya kepada guru di sekolah jika ada konsep dari video YouTube yang belum saya pahami.</LazyCardConten>
                </div>
            </div>
        </div>
    );
};

export default AboutConten;

