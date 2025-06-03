import React from 'react'
import Button from './Button'

function Center() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 text-center w-[70%] mx-auto  '>
        <p className='text-6xl font-bold tracking-widest leading-8'>Mohd. Suleman</p>
        <p className='text-4xl font-bold leading-10'>A FULL-STACK DEVELOPER, Based In India</p>

        <p className='text-neutral-500 font-medium'>I design and build custom websites that help businesses grow. Freelance web developer specializing in responsive, modern websites for startups, brands, and small businesses.</p>

        <Button>Contact me</Button>
    </div>
  )
}

export default Center