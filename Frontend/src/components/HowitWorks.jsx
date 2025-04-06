import React from 'react'
import GradientText from './GradientText'
import ShinyText from './ShinyText'

const HowitWorks = () => {
  return (
    <div className='pt-44'>
    <div className='text-8xl'>
      <GradientText
        colors={["#e3e3e3", "#459ddc", "#459ddc", "#459ddc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        How it works
      </GradientText>
    </div>
    <div>
      <div className="ml-20 space-y-16 px-6 mt-6 py-12 text-neutral-800">
        <div className="space-y-4">
      <p className="text-sm text-neutral-400">01</p>
      <h2 className="text-3xl font-semibold text-white">Upload</h2>
      <p className="text-neutral-500 max-w-md">
        Drop in anything—voice memos, call recordings, podcasts, lectures.
      </p>
      <span className="inline-block mt-4 px-4 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full font-medium">
        <ShinyText text={"Coming Soon"} />
      </span>
        </div>
        <div className="space-y-4">
      <p className="text-sm text-neutral-400">02</p>
      <h2 className="text-3xl font-semibold text-white">Ask Anything</h2>
      <p className="text-neutral-500 max-w-md">
        Use the chat to ask about topics, people, keywords, or moments in your recordings.
      </p>
      <span className="inline-block mt-4 px-4 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full font-medium">
        <ShinyText text={"Coming Soon"} />
      </span>
        </div>
        <div className="space-y-4">
      <p className="text-sm text-neutral-400">03</p>
      <h2 className="text-3xl font-semibold text-white">Get Answers + Audio Snippets</h2>
      <p className="text-neutral-500 max-w-md">
        Receive accurate answers and the matching audio clips—instantly.
      </p>
      <span className="inline-block mt-4 px-4 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full font-medium">
        <ShinyText text={"Coming Soon"} />
      </span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default HowitWorks