import React from 'react'
import { useNavigate } from "react-router-dom";

const Section = () => {
      const navigate = useNavigate();

    return (
        <>
            <div className='w-full min-h-screen flex items-center justify-center bg-black px-5 py-10 md:px-10'>
                <div className="cntr flex flex-col lg:flex-row w-full max-w-7xl h-auto lg:h-[80%] text-white items-center sm:mt-50px">

                    <div className="limg relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full flex items-center justify-center">
                        <img
                            src="./bakugo.webp"
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 lg:w-xs'
                            alt=""
                        />
                    </div>

                    <div className="rg w-full lg:w-[40%] text-center lg:text-left mt-40 lg:mt-0">

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl leading-none'>
                            Katsuki Bakugo
                        </h1>

                        <h1 className='text-3xl sm:text-4xl lg:text-6xl lg:ml-35 leading-none mt-2 lg:mt-0'>
                            ( Dynamight )
                        </h1>

                        <p className='mt-8 lg:mt-10 font-[Helvetica] text-base sm:text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tempora optio illum qui.
                        </p>

                        <p className='mt-3 font-[Helvetica] text-base sm:text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et molestiae aperiam temporibus earum consequatur harum enim omnis ullam tenetur?
                        </p>

                        <p className='mt-3 font-[Helvetica] text-base sm:text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et molestiae aperiam temporibus earum consequatur harum enim omnis ullam tenetur?
                        </p>

                        <button className='bg-orange-400 px-8 sm:px-10 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl mt-8 lg:mt-10 text-black hover:bg-orange-400 hover:text-white hover:translate-y-1'
                       onClick={() => navigate("/characters")} >
                            Mha Book
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Section