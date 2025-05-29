import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'


function App() {
  return (
    <>
    <div className="main bg-black w-full min-h-screen px-10 py-6 text-neutral-200 ">
      <Navbar></Navbar>

      <div className="landing h-[90vh] w-full flex items-center justify-center">
        <Center></Center>
      </div>
    </div>
    
    </>
  )
}

export default App