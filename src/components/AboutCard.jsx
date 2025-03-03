import { motion } from 'framer-motion';

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-26 hidden right-10 w-80 p-6 rounded-2xl backdrop-blur-xs bg-black/20 border border-gray-700/30"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold ">About Me</h2>
        
        <p >
          Full-Stack Mern Developer With Hands-on Industry Experience. <br />
          Worked with Many Companies for Full-Stack Role. 
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 text-sm bg-white/10 rounded-full ">React.js</span>
          <span className="px-3 py-1 text-sm bg-white/10 rounded-full ">Next.js</span>
          <span className="px-3 py-1 text-sm bg-white/10 rounded-full ">MongoDB</span>
          <span className="px-3 py-1 text-sm bg-white/10 rounded-full ">Node.js</span>
          <span className="px-3 py-1 text-sm bg-white/10 rounded-full ">Express.js</span>
        </div>

        <div className="pt-4 border-t border-gray-700/30">
          <p className="text-gray-400/90 text-sm">
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCard;

