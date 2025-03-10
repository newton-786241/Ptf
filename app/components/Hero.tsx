import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Magicbutton from './magicbutton'
import { FaLocationArrow } from 'react-icons/fa'


const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple"/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] top-0 left-0 flex items-center justify-center absolute overflow-hidden">
            {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <div className='flex justify-center my-48 z-2 relative'>
        <div className='max-w-[89vw] flex flex-col justify-center items-center md:max-w-2xl gap-10 lg:max-w-[60vw]'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>crafting digital excellence with precision.</h2>
            <TextGenerateEffect
            className='text-center lg:text-6xl text-[40px] md:text-5xl mb-4 '
            words='Precision at Every Pixel. Performance at Every Click.'
            />
            <p className='text-center md:tracking-wider md:text-lg text-sm mb-4 lg:text-2xl '>
                We craft fast, elegant websites for brands that value excellence.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjq0kLecnk1Oy8VA5c_buAI1_iMwihjeWr4gIXQT-FiPwTDA/viewform" target='_blank'>
            <Magicbutton
                title="Create With Us"
                icon= {<FaLocationArrow/>}
                position=""
                otherClasses=''
            /></a>
        </div>
      </div>
    </div>
  )
}

export default Hero
