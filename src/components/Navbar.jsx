import React from 'react'
import Button from './Button'
import { motion } from 'motion/react'


function Navbar() {
    const links = [
        
        {
            title: 'About', href: '/'
        },
        {
            title: 'Projects', href: '#projects'
        },
        {
            title: 'Resume', href: '/resume'
        },
        {
            title: "Skills", href: '#skills'
        },
        {
            title: "Experience", href: "#experience"
        }
    ]

  return (
    <motion.nav
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className=' flex justify-between items-center w-full '>
      
        <p className='text-xl font-bold'>Suleman</p>

        <div className="links flex gap-16">
            {links.map((link, index) => (
                <a key={index} href={link.href}>{link.title}</a>
            ))}
        </div>
        <Button>Contact me</Button>
    
    </motion.nav>
  )
}

export default Navbar