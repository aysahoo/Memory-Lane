import React from 'react'
import { assets } from '../assets/assets'
import Navbar from '../components/Navbar'
import GradientText from '../components/GradientText'
import ShinyText from '../components/ShinyText'

const Hero = () => {
  return (
    <>
    <div className='min-h-[600px]'>
    <img className='relative min-w-full object-cover scale-110' src={assets.hero_bg} alt="hero" />
      <div className='absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Navbar />
      </div>
      <div className='absolute text-white top-1/2 left-1/2 translate-x-[-50%]'>
        <h1 className='whitespace-nowrap  font-semibold text-[150px] translate-y-[-60%]'>
        <GradientText
          colors={["#e3e3e3", "#459ddc", "#459ddc", "#459ddc"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Memory Lane
        </GradientText>
        </h1>
        <h3 className='text-center text-neutral-400 translate-y-[-600%]'>
          Upload, search, and chat with your audio files. 
          Get instant answers without scrubbing through hours of sound.
        </h3>
      </div>
      <div className='w-38 text-center text-neutral-600 bg-neutral-900 border-2  border-neutral-600 hover:border-neutral-400 
                      rounded-lg py-3 absolute top-[77%] left-1/2 translate-x-[-50%] translate-y-[-190%] '>
        <a className='px-3' href="/chat">
          <ShinyText text="Get Started → " disabled={false} speed={2} className='custom-class' />
        </a>
      </div>
    </div>

    </>
  )
}

export default Hero


