import React from 'react'
import { motion } from 'motion/react'


function Experiences() {
  const data = [
    {
      role: "Frontend Engineer Intern",
      company: "Infosys India pvt ltd",
      description: "This is a detailed description of experience 1.",
      duration: "Jan 2020 - Dec 2020"
    }
  ]


  return (
    <div id='experience' className=' p-20'>
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-6xl font-bold text-center mb-10 ">Industry Experiences</motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-4 flex gap-4 flex-col">
        {data.map((exp, index) => (
          <ExperienceCard key={index} role={exp.role} company={exp.company} description={exp.description} duration={exp.duration} />
        ))}
      </motion.div>
      
    </div>
  )
}



function ExperienceCard({ role, company, description, duration }) {
  return (
    <div className="bg-[#0c1821]  flex  items-center px-10 py-10 rounded-lg">
      <div className='w-[30%]'>
        <h3 className="text-2xl font-bold">{company}</h3>
        <h4 className="text-xl font-medium">{role}</h4>
      </div>
      <div>
        <p className="text-gray-300 ">{description}</p>
        <span className="text-neutral-500 ">{duration}</span>
      </div>
    </div>
  )
}



export default Experiences