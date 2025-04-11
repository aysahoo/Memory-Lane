import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import TiltedCard from '../components/TiltedCard'

const Team = () => {
  const teamMembers = [
    {
      name: "Ankit Kumar",
      role: "Backend Developer",
      img: "https://picsum.photos/200",
      position: "left-[60%] top-[35%] lg:left-[75%] lg:top-[30%]",
      socialLinks: {
        github: 'https://github.com/Ankit-Kumar20',
        linkedin: 'https://www.linkedin.com/in/ankit-kumar-017011204/'
      }
    },
    {
      name: "Ayush Sahoo",
      role: "Developer & Designer",
      img: "https://picsum.photos/200",
      position: "left-[45%] top-[40%] lg:left-[45%] lg:top-[50%]",
      socialLinks: {
        github: 'https://github.com/aysahoo',
        linkedin: 'https://www.linkedin.com/in/ayush-sahoo04/'
      }
    },
    {
      name: "Adarsha Natia",
      role: "Developer & Designer",
      img: "https://picsum.photos/200",
      position: "left-[10%] top-[45%] lg:left-[10%] lg:top-[40%]",
      socialLinks: {
        github: 'https://github.com/Adarsha2004',
        linkedin: 'https://www.linkedin.com/in/adarsha-natia-9921092b4/'
      }
    },
  ]

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-black via-zinc-900 to-slate-900 overflow-hidden text-white">
      <div className="absolute top-[7%] left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
        <Navbar />
      </div>

      {/* Background text */}
      <h1 className="absolute hidden lg:inline lg:text-[14vw] font-extrabold text-white/5 lg:top-[15%] left-[35%] lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        THE
      </h1>
      <h1 className="absolute hidden lg:inline lg:text-[18vw] font-extrabold text-white/5 lg:top-[40%] left-[62%] lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        TEAM
      </h1>

      {/* Desktop layout
      <div className="h-full px-20 mt-20 hidden lg:block">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`absolute ${member.position} z-10 w-[250px] text-center`}
          >
            <TiltedCard
              imageSrc={member.img}
              altText={member.name}
              captionText={member.name}
              containerHeight="300px"
              containerWidth="250px"
              imageHeight="300px"
              imageWidth="250px"
              rotateAmplitude={10}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
            <div className="mt-2">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-xs text-[#459ddc]">{member.role}</p>
              <div className="mt-2 flex justify-center gap-2">
                <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assets.github}
                    alt="GitHub"
                    className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                </a>
                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assets.linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Mobile layout with smaller cards */}
      {/* <div className="lg:hidden sm:items-center flex flex-col pl-8 gap-10 mt-32">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-[200px] flex text-center">
            <TiltedCard
              imageSrc={member.img}
              altText={member.name}
              captionText={member.name}
              containerHeight="200px"
              containerWidth="180px"
              imageHeight="200px"
              imageWidth="180px"
              rotateAmplitude={10}
              scaleOnHover={1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
            <div className="mt-6 ml-4">
              <h4 className="text-sm font-thin whitespace-nowrap">{member.name}</h4>
              <p className="text-xs text-[#459ddc]">{member.role}</p>
              <div className="mt-2 flex justify-center gap-2">
                <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assets.github}
                    alt="GitHub"
                    className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                </a>
                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assets.linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Team
