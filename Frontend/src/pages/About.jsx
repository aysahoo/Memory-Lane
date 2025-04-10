import React, { useState } from 'react'
import Space from '../components/Space'


const About = () => {
    const [showSpace, setShowSpace] = useState(false)
  return (
    <div className="relative min-h-screen bg-neutral-900 text-white p-4">
      <button
        onClick={() => setShowSpace(true)}
        className="bg-[#459ddc] hover:bg-[#387fb1] text-white px-4 py-2 rounded-xl"
      >
        Open My Space
      </button>

      {showSpace && (
        <Space onClose={() => setShowSpace(false)} />
      )}
    </div>
  )
}

export default About
