import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl min-h-[400px]" // Increased min height
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 transition-opacity duration-500 lg:bg-opacity-50 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <h3 className="mb-6 text-center text-2xl font-bold lg:text-3xl">
                {project.name}
              </h3>
              <p className="mb-8 px-4 text-center text-lg font-semibold lg:text-xl">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 rounded-full bg-white px-3 py-1 text-sm text-black hover:bg-gray-300"
              >
                <div className="flex items-center font-bold">
                  <span>View on GitHub</span>
                  <MdArrowOutward className="ml-1" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
