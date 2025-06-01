import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Skills from './components/Skills' 





function App() {
  return (
    <>
    <div className="main bg-black w-full min-h-screen px-10 py-6 text-neutral-200 overflow-hidden relative">
      <Navbar></Navbar>

      <div className="landing h-screen w-full flex items-center justify-center">
        <Center></Center>
      </div>
      <div className="skill">
        <Skills></Skills>
      </div>
    </div>
    
    </>
  )
}

export default App