"use client";

const CardProject = ({ Name, Des, Url }) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-white/20 shadow-lg ring-1 bg-clip-border mt-10 text-white font-Seymour_One">
       <div className="relative  mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40" style={{backgroundImage: `url(${Url})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block  text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {Name}
                </h5>
                <p className="block ext-base font-light leading-relaxed text-inheri text-md antialiased">
                    {Des}
                </p>
            </div>
        </div>
    )
}

export default CardProject
