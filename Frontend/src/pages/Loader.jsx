import React from 'react'
import CountUp from "../components/LoadCount"

const Loader = () => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
        <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={5}
        className="count-up-text font-sans font-semibold text-9xl"
        delay={3}
        />
    </div>
  )
}

export default Loader