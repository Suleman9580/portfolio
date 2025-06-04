import React from 'react'
import { easeInOut, motion } from 'motion/react'
import { stagger } from 'motion'



function Projects() {
    const data = [{
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione quo at neque, aspernatur itaque suscipit, deleniti repellat aperiam sed labore iusto quidem non? Architecto porro eaque officia, corrupti quo aperiam temporibus consequuntur placeat iusto eligendi aliquid similique a esse minus iure pariatur voluptates repudiandae sint magnam illo maxime at.",
        link: "https://example.com/project1",
        image: "/avatar.png"
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione quo at neque, aspernatur itaque suscipit, deleniti repellat aperiam sed labore iusto quidem non? Architecto porro eaque officia, corrupti quo aperiam temporibus consequuntur placeat iusto eligendi aliquid similique a esse minus iure pariatur voluptates repudiandae sint magnam illo maxime at.",
        link: "https://example.com/project2",
        image: "/avatar.png"
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione quo at neque, aspernatur itaque suscipit, deleniti repellat aperiam sed labore iusto quidem non? Architecto porro eaque officia, corrupti quo aperiam temporibus consequuntur placeat iusto eligendi aliquid similique a esse minus iure pariatur voluptates repudiandae sint magnam illo maxime at.",
        link: "https://example.com/project3",
        image: "/avatar.png"
    }

    ]
  return (
    <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2}}
    className=' p-20 projects '>  
        <h2 className="text-6xl font-bold text-center mb-20 ">Experience That I have <br /> Working On Some industry Grade Projects</h2>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2}}

        className=" p-4 flex gap-4 flex-col">
            {data.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                    image={project.image} 
                />
            ))}
        </motion.div>
    </motion.div>
  )
}

const ProjectCard = ({ title, description, link, image }) => { 
    return (
        <div className="bg-neutral-900 h-100 p-10 rounded-lg flex gap-20" >
        <div className='overflow-hidden  rounded-lg cursor-pointer'>
            <img src={image} alt={title} className=" scale-[1] hover:scale-[1.03] transition-all ease-in-out duration-300 object-cover rounded-lg" />
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-gray-400 ">{description}</p>
            <a href={link} target="_blank" className=' ' >View Project</a>
        </div>
        </div>
    )
 }



export default Projects