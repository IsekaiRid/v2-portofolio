import React from 'react';
import { useRouter } from 'next/navigation';

const Button = ({ children, href }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
      }

    return (
        <button
            className="relative bg-opacity-30 backdrop-blur-md overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-[#7f5a83] before:to-[#0d324d] before:bg-opacity-30 before:blur-sm"
            onClick={handleClick}
        >
            <span className="relative text-white font-bold px-8 py-8">{children}</span>
        </button>
    );
};

export default Button;
