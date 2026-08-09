import React from 'react'
import { RiArrowDownLine } from "@remixicon/react";
const Landing = () => {
    return (
        <>
        <div className='main w-full'>


            <div className="landing w-full h-screen bg-black">
                <div className="navbar absolute top-0 left-0 z-10 py-10 px-10 w-full ">
                    <div className="logo flex gap-7">
                        <div className="lines flex flex-col gap-[10px]">
                            <div className="line w-15 h-2 bg-white"></div>
                            <div className="line w-8 h-2 bg-white"></div>
                            <div className="line w-5 h-2 bg-white"></div>
                        </div>
                        <h3 className='text-4xl -mt-[8px] leading-none text-white'>MHA</h3>
                    </div>
                </div>



                <div className="imagesdiv relative w-full h-screen overflow-hidden">
                    {/* <img className='absolute top-0 left-0 w-full h-full object-cover'
              src="./cloud1.png"
              alt="" /> */}

                    <img className='bg absolute scale-[1.1] top-0 left-0 w-full h-full object-cover'
                        src="./scene.png"
                        alt="" />


                    <div className="text absolute text-white flex flex-col gap-3 top-10 left-1/2 -translate-x-1/2 ">
                        <h1 className='text-[8rem] -ml-30 leading-none'  >Izuku</h1>
                        <h1 className='text-[8rem] ml-30 leading-none'>Midoriya</h1>
                        <h1 className='text-[8rem] -ml-40 leading-none'>Aka Deku</h1>
                        {/* <h1 className='text-[9rem] -ml-40 leading-none'>Academia</h1> */}
                    </div>

                    <img src="./deku.webp"
                        alt="error"
                        className="character absolute -bottom-[50%] left-1/2 -translate-x-1/2 scale-[.82] " />
                </div>

                <div className="btmbar absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
                    <div className="flex gap-4 items-center text-white text-2xl">
                        <RiArrowDownLine size={30} />
                        <h3>Scroll down</h3>
                    </div>

                    <img className=' h-[250px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ' src="./mhalogo.png" alt="error" />
                </div>
            </div>

        </div>
        </>
    )

}

export default Landing ;