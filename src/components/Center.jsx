import React from 'react'
import Button from './Button'

function Center() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 text-center w-[70%] mx-auto  '>
        <p className='text-6xl font-bold tracking-widest leading-8'>Mohd. Suleman</p>
        <p className='text-4xl font-bold leading-10'>A FULL-STACK <span>DEVELOPER </span><br /> <span className='text-3xl font-medium'>Based In India</span></p>

        <p className='text-neutral-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero debitis est magnam exercitationem adipisci, omnis ipsum odio beatae qui quidem eaque cum esse ipsa ab reiciendis expedita incidunt minima nobis. Eligendi voluptatem repudiandae nostrum eius molestiae et dolor dignissimos fugiat fugit, repellendus praesentium aspernatur eaque optio recusandae placeat non.</p>

        <Button>Contact me</Button>
    </div>
  )
}

export default Center