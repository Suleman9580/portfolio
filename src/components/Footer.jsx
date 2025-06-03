import React from 'react'
import Marquee from 'react-fast-marquee'



function Footer() {



  return (
    <>
    <div className='w-full flex flex-col items-center gap-20'>


    <div className=' [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] w-full'>
     <Marquee speed={30}>
        <div className="flex items-center justify-center gap-10 overflow-hidden ">

    <h1 className='text-8xl font-semibold '>CONTACT ME</h1>
    <div className='w-4 h-4 bg-neutral-400 rounded-full'></div>
    <h1 className='text-8xl font-semibold'>CONTACT ME</h1>
    <div className='w-4 h-4 bg-neutral-400 rounded-full'></div>
        </div>
</Marquee>  
   
    </div>

  <div className='w-full flex items-center justify-between px-20'>
    <div className=''>
    <h1 className='text-3xl '>Get In Touch</h1>
    <p className='text-neutral-500 mt-4'>Email</p>
    <a href="mailto:suleman.techworks@gmail.com">
      suleman.techworks@gmail.com
    </a>
    <p className='text-neutral-500 mt-4'>Phone</p>
    <a href="tel:+919580629950" className='block'>
      +91 95806 29950 
    </a>
    </div>
    <div className='w-[50%]'>
    <p className='text-center text-neutral-500'>
      Send me your email to discuss new projects, collaborations, or just to say hello! I would love to hear from you.
    </p>
    <form action="mailto:suleman.techworks@gmail.com">
      <input type="email" placeholder='Enter Your Email' className=' px-6 mt-6 bg-neutral-900 border-0 p-2 rounded-full w-full' />
    </form>

    </div>
  </div>

  <div className='h-[1px] w-full bg-neutral-800'></div>

  <div className='w-full flex items-center justify-between px-20 -mt-10'>
    <div className='flex items-center gap-4 transition-all ease-in-out duration-300'>
      <a href="https://www.linkedin.com/in/suleman9580" target='_blank' className='text-neutral-500 hover:text-neutral-300'>LinkedIn</a>
      <a href="https://github.com/suleman9580" target='_blank' className='text-neutral-500 hover:text-neutral-300'>GitHub</a>
      <a href="https://twitter.com/MohdSul44471196" target='_blank' className='text-neutral-500 hover:text-neutral-300'>Twitter</a>
    </div>
    <p className='text-neutral-500'>© 2023 Suleman Techworks</p>
  </div>
  </div>
    </>
  )
}

export default Footer