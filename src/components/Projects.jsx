import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

// Define Projects functional component
const Projects = () => {
  return (
    <section>
      <div className="flex flex-col gap-8">
        {/* Map over the projects array and render project cards */}
        {projectData.map((project) => (
          <div key={project.id} className="w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

// Export Projects component as default
export default Projects;
