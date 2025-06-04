import React from 'react'
import { motion } from 'motion/react'

function Button({children}) {

  
  return (
    <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className='px-4 py-2 duration-200 text-neutral-800 font-medium rounded-lg cursor-pointer bg-neutral-100'>{children}</motion.div>
  )
}

export default Button