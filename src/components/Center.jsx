



function Center() {

  const words = "I design and build custom websites that help businesses grow. Freelance web developer specializing in responsive, modern websites for startups, brands, and small businesses"

  return (
    <div className=' flex flex-col items-center justify-center gap-6 text-center w-[70%] mx-auto  '>

      <p className='text-6xl font-bold tracking-widest leading-8'>Mohd. Suleman</p>

      <p className='text-4xl font-bold leading-10'>A FULL-STACK DEVELOPER, Based In India</p>

      <p className='text-neutral-500 font-medium'>I design and build custom websites that help businesses grow. Freelance web developer specializing in responsive, modern websites for startups, brands, and small businesses.</p>



      <div className='flex gap-4  '>
        <a
          href='https://www.linkedin.com/in/suleman9580'
          target='_'
          className="group  flex h-10 items-center gap-2 rounded-full bg-neutral-900 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-zinc-900 hover:pl-2  active:bg-neutral-700">
          <span className="rounded-full bg-green-600 p-1 text-sm transition-colors duration-300 group-hover:bg-white"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          <span>LinkedIn</span>
        </a>

        <a
          href='https://github.com/suleman9580'
          target='_'
          className="group  flex h-10 items-center gap-2 rounded-full bg-neutral-900 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-zinc-900 hover:pl-2  active:bg-neutral-700">
          <span className="rounded-full bg-green-600 p-1 text-sm transition-colors duration-300 group-hover:bg-white"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          <span>GitHub</span>
        </a>

        <a
          href='https://twitter.com/MohdSul44471196'
          target='_'
          className="group  flex h-10 items-center gap-2 rounded-full bg-neutral-900 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-zinc-900 hover:pl-2  active:bg-neutral-700">
          <span className="rounded-full bg-green-600 p-1 text-sm transition-colors duration-300 group-hover:bg-white"><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
          <span>Twitter</span>
        </a>

      </div>






    </div>
  )
}

export default Center