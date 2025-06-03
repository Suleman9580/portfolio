import React from 'react'

function Experiences() {
    const data = [
        {
            role: "Software Engineer",
            company: "Infosys India pvt ltd",
            description: "This is a detailed description of experience 1.",
            duration: "Jan 2020 - Dec 2020"
        },
        {
            role: "Software Engineer",
            company: "Company B",
            description: "This is a detailed description of experience 2.",
            duration: "Jan 2021 - Dec 2021"
        },
        {
            role: "Software Engineer",
            company: "Company C",
            description: "This is a detailed description of experience 3.",
            duration: "Jan 2022 - Dec 2022"
        }
    ]
  return (
    <div className=' p-20'>
      <h2 className="text-6xl font-bold text-center mb-10 ">Industry Experiences</h2>
      <div className="p-4 flex gap-4 flex-col">
        {data.map((exp, index) => (
          <ExperienceCard key={index} role={exp.role} company={exp.company} description={exp.description} duration={exp.duration} />
        ))}
      </div>
    </div>
  )
}
function ExperienceCard({ role, company, description, duration }) {
  return (
    <div className="bg-neutral-900 flex  items-center px-10 py-10 rounded-lg">
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