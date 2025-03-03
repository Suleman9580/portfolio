import React from 'react'
import { BackgroundLines } from './components/ui/background-lines'
import AboutCard from './components/AboutCard'
import ContactCard from './components/ContactCard'



function App() {
  return (
    <>
    <div className="main relative h-screen w-full px-8 py-8 text-neutral-400">
    <BackgroundLines className="flex items-center justify-center flex-col px-4">
    </BackgroundLines>

    <AboutCard></AboutCard>
    <ContactCard></ContactCard>
    
    <div className="work-card absolute top-100">
    <p className='font-bold text-lg'>Recent Works</p>
    <img className='h-50 w-68 mt-2 hover:scale-96 transition-scale scale-100 cursor-pointer duration-700 rounded-xl object-cover' src="src\assets\work-img.jpg" alt="work image" />
    </div>  
   
   <div className="availability absolute right-12 items-center gap-2 font-semibold flex">
    <div className='h-2 w-2 rounded-full bg-green-600'></div>
    <h1>Available to work</h1>
   </div>

   <div className="menu absolute bottom-20 right-30 flex items-center font-semibold justify-center ">
      <div className="relative flex items-center justify-center">
        {/* Circle */}
        <div className="circle h-26 w-26 border p-2 border-gray-400 rounded-full flex items-start justify-center">
          {/* Small white dot at the top */}
          <div className=" h-2 w-2 bg-white rounded-full"></div>
        </div>

        {/* Menu Items */}
        <a href="#" className="absolute top-[-30px] text-[14px]">
          INDEX
        </a>
        <a href="#" className="absolute left-[-60px] text-[14px] ">
          WORK
        </a>
        <a href="#" className="absolute right-[-60px] text-[14px] ">
          ABOUT
        </a>
        <a href="#" className="absolute bottom-[-30px] text-[14px] ">
          CONTACT
        </a>
      </div>
    </div>


    </div>
    </> 
  )
}

export default App