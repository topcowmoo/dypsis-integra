import PropTypes from "prop-types";
import {
  SiGithub,
  SiHeroku,
  SiRender,
  SiScreencastify,
  SiNetlify,
} from "react-icons/si";

const ProjectCard = ({ project }) => {
  const {
    title,
    image,
    description,
    githubLink,
    demoLink,
    herokuLink,
    renderLink,
    netlifyLink,
  } = project;

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderLinkButton = (url, IconComponent, label) => (
    <button
      onClick={() => openLinkInNewTab(url)}
      aria-label={label}
      className="mr-1 text-[24px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px]"
    >
      <IconComponent />
    </button>
  );

  return (
    <div className="group container flex flex-col lg:flex-row dark:bg-white/10 bg-black bg-opacity-10 rounded-lg p-7 brightness-75 hover:brightness-100 transition-all duration-300 hover:shadow-lg hover:shadow-title-light dark:hover:shadow-alltext-dark">

      {/* Left section with image */}
      <div className="project-card">
        <img
          src={image ?? "https://via.placeholder.com/300"}
          alt=""
          loading="lazy"
          className="rounded-md w-full h-auto"
        />
      </div>

      {/* Right section with title, description, and buttons */}
      <div className="flex-1 flex flex-col justify-between lg:justify-start">
        <div className="text-[22px] md:text-[28px] dark:text-title-dark text-title-light lg:mt-0 mt-4">
          {title}
        </div>
        <div className="dark:text-alltext-dark text-alltext-light mt-3 mb-5 leading-normal text-balance text-[18px] md:text-[20px] 2xl:text-[25px]">
          {description}
        </div>
        <div className="flex space-x-4 mt-2 justify-center items-center">
          {githubLink && (
            <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
              {renderLinkButton(githubLink, SiGithub, "GitHub repository")}
            </div>
          )}
          {herokuLink && (
            <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
              {renderLinkButton(herokuLink, SiHeroku, "Heroku live link")}
            </div>
          )}
          {renderLink && (
            <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
              {renderLinkButton(renderLink, SiRender, "Render live link")}
            </div>
          )}
          {demoLink && (
            <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
              {renderLinkButton(demoLink, SiScreencastify, "Demo link")}
            </div>
          )}
          {netlifyLink && (
            <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
              {renderLinkButton(
                netlifyLink,
                SiNetlify,
                "Netlify live link"
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    herokuLink: PropTypes.string,
    renderLink: PropTypes.string,
    netlifyLink: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
