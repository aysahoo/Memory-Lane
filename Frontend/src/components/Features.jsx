import React from 'react'
import SpotlightCard from './SpotlightCard'
import GradientText from './GradientText'

const Features = () => {
  return (
    <>
      <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center pb-16 sm:pb-24 md:pb-32'>
        <GradientText
          colors={["#e3e3e3", "#459ddc", "#459ddc", "#459ddc"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          Features
        </GradientText>
      </div>

      <div className='flex flex-wrap justify-center gap-x-10 gap-y-14 px-4 sm:px-10 md:px-10 mx-auto'>
        {/* Card 1 */}
        <SpotlightCard className="h-60 w-60 sm:w-80 sm:h-80" spotlightColor="rgba(69, 157, 220, 0.2)">
          <div className="text-white rounded-2xl shadow-lg p-3 sm:p-4 flex flex-col justify-between h-full">
            <div className="text-xl sm:text-3xl">☁️</div>
            <div className="flex-1">
              <h2 className="text-sm sm:text-lg font-semibold mb-2">All Your Audio, One Smart Hub</h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Securely store and organize your audio library. Access your voice notes, meetings, podcasts, interviews, and more—anytime.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard className="h-60 w-60 sm:w-80 sm:h-80" spotlightColor="rgba(69, 157, 220, 0.2)">
          <div className="text-white rounded-2xl shadow-lg p-4 flex flex-col justify-between h-full">
            <div className="text-xl sm:text-3xl">🔍</div>
            <div className="flex-1">
            <h2 className="text-sm sm:text-lg font-semibold mb-2">Search Your Audio Like Never Before</h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Ask questions in natural language and get direct answers from your audio content—no transcription required.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 3 */}
        <SpotlightCard className="h-60 w-60 sm:w-80 sm:h-80" spotlightColor="rgba(69, 157, 220, 0.2)">
          <div className="text-white rounded-2xl shadow-lg p-4 flex flex-col justify-between h-full">
            <div className="text-xl sm:text-3xl">💬</div>
            <div className="flex-1">
            <h2 className="text-sm sm:text-lg font-semibold mb-2">Chat With Your Memories</h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Talk to your files like a friend. Get summaries, context, or exact quotes—all from voice recordings, podcasts, meetings, and more.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 4 */}
        <SpotlightCard className="h-60 w-60 sm:w-80 sm:h-80" spotlightColor="rgba(69, 157, 220, 0.2)">
          <div className="text-white rounded-2xl shadow-lg p-4 flex flex-col justify-between h-full">
            <div className="text-xl sm:text-3xl">🎯</div>
            <div className="flex-1">
            <h2 className="text-sm sm:text-lg font-semibold mb-2">Get Instant Snippets</h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Receive pinpoint audio clips that match your queries. Hear the moment you need, without the noise.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </>
  )
}

export default Features
