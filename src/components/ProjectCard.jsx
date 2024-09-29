import PropTypes from 'prop-types';
import {
  SiGithub,
  SiHeroku,
  SiRender,
  SiScreencastify,
  SiGithubpages,
} from 'react-icons/si';

const ProjectCard = ({ project }) => {
  const {
    title,
    image,
    description,
    githubLink,
    demoLink,
    herokuLink,
    renderLink,
    githubPagesLink,
  } = project;

  const openLinkInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
    <div className="group container flex flex-col lg:flex-row dark:bg-white/10 bg-black bg-opacity-10 rounded-lg p-7">
      {/* Left section with image */}
      <div className="project-card">
        <img
          src={image ?? 'https://via.placeholder.com/300'}
          alt={title}
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
      {renderLinkButton(githubLink, SiGithub, 'GitHub repository')}
    </div>
  )}
  {herokuLink && (
    <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
      {renderLinkButton(herokuLink, SiHeroku, 'Heroku live link')}
    </div>
  )}
  {renderLink && (
    <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
      {renderLinkButton(renderLink, SiRender, 'Render live link')}
    </div>
  )}
  {demoLink && (
    <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
      {renderLinkButton(demoLink, SiScreencastify, 'Demo link')}
    </div>
  )}
  {githubPagesLink && (
    <div className="dark:text-alltext-dark text-alltext-light hover:text-highlight-light dark:hover:text-highlight-dark">
      {renderLinkButton(githubPagesLink, SiGithubpages, 'GitHub Pages live link')}
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
    githubPagesLink: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
