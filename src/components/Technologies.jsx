import React from 'react'
import Marquee from 'react-fast-marquee'


function Technologies() {

  const data = [
    {
      title: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      title: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      title: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      title: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      title: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      title: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    {
      title: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      title: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    }

  ]


  return (
      <div className="p-20 ">
        <p className='text-6xl font-bold text-center mb-20'>Technologies That I Master <br /> Over Time</p>
        <div className=' [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]'>
          <Marquee speed={30}  pauseOnHover={true} >
          <div className="flex  gap-20 ml-20 ">
          {data.map((skill, index) => (
            <TechnologiesCard key={index} icon={skill.icon} title={skill.title}  />
          ))}
        </div>
        </Marquee>
        </div>
    </div>
  )
}

const TechnologiesCard = ({ title, icon }) => (
  <div className="flex justify-center items-center gap-4 relative">
    <img src={icon} alt={title} className="w-20 h-20  grayscale" />
    <h3 className="text-5xl text-neutral-600 tracking-wider font-bold">{title}</h3>
  </div>
)





export default Technologies