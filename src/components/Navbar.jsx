import React from 'react'
import Button from './Button'

function Navbar() {
    const links = [
        
        {
            title: 'About', href: '/about'
        },
        {
            title: 'Projects', href: '/projects'
        },
        {
            title: 'Resume', href: '/resume'
        }
    ]

  return (
    <nav className=' flex justify-between items-center w-full '>
      
        <p>Suleman</p>

        <div className="links flex gap-20">
            {links.map((link, index) => (
                <a key={index} href={link.href}>{link.title}</a>
            ))}
        </div>
        <Button>Contact me</Button>
    
    </nav>
  )
}

export default Navbar