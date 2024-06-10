import React from 'react'
import CardProject from '../UI/CardProject'

const ProjectHistory = () => {
    return (
        <div id='project' className='justify-center top-0 left-0 w-full h-full text-white columns-1 z-[25] mb-4'>
            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='font-bold text-4xl font-Seymour_One'>Project Me</h1>
                <p className='font-bold text-md font-kanit mx-5'>Ini adalah proyek yang saya kerjakan pada waktu luang saya untuk menambah pengalaman saya dalam dunia pemrograman</p>
            </div>
            <div className='justify-center items-center mt-10 mb-3 md:px-36 flex h-full'>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <CardProject Url='./website1.png' Name='Anime List' Des='Membuat tempat List anime Populer' />
                    <CardProject Url='./website2.png' Name='Portofolio V1' Des='Portofolio Pertama saya' />
                    <CardProject Url='https://private-user-images.githubusercontent.com/140608764/285852118-3298a0ff-5b21-49e4-952c-6c916e9b9969.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTc5MzE5NzYsIm5iZiI6MTcxNzkzMTY3NiwicGF0aCI6Ii8xNDA2MDg3NjQvMjg1ODUyMTE4LTMyOThhMGZmLTViMjEtNDllNC05NTJjLTZjOTE2ZTliOTk2OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYwOVQxMTE0MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYzhkMDA2YzkwZTk5YjIxOTRlYjNmODJhN2IwNDI2YTdmNGFiNGU3ODk5NDFkMzE2ZWM2N2YwYzRiZmE2NzQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.LPXGTlQyFl9fZm7SRnqkQTOgfXRJr4w1QPm6nXm7_0E' Name='Website PHP Sederhana' Des='Tugas testing PHP pertama saya' />
                    <CardProject Url='./website3.png' Name='Website Sosial Laravel' Des='Tugas akhir semerter ku' />
                </div>
            </div>
        </div>
    )
}

export default ProjectHistory
