import React from 'react'
import { BackgroundLines } from './components/ui/background-lines'

function App() {
  return (
    <>
    <div className="main relative h-screen w-full px-8 py-8 text-neutral-400">
    <BackgroundLines className="flex items-center justify-center flex-col px-4">
    </BackgroundLines>


    <div className="work-card absolute top-100">
    <p className='font-bold text-lg'>Recent Works</p>
    <img className='h-50 w-68 mt-2 hover:scale-96 transition-scale scale-100 cursor-pointer duration-700 rounded-xl object-cover' src="src\assets\work-img.jpg" alt="work image" />
    </div>  
   
    </div>
   
    </> 
  )
}

export default App