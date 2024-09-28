import {
  SiGithub,
  SiLinkedin,
  SiFrontendmentor,
  SiWakatime,
} from "react-icons/si";

function Socials() {
  return (
    <div
      className="flex gap-4 dark:text-alltext-dark text-alltext-light"
    >
      <a
        href="https://github.com/topcowmoo"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
        title="Github Profile"
        aria-label="Github Profile"
      >
        <SiGithub className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]" />
      </a>

      <a
        href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
        title="Linkedin Profile"
        aria-label="Linkedin Profile"
      >
        <SiLinkedin className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]" />
      </a>

      <a
        href="https://wakatime.com/@topcowmoo"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
        title="WakaTime Profile"
        aria-label="WakaTime Profile"
      >
        <SiWakatime className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]" />
      </a>

      <a
        href="https://www.frontendmentor.io/profile/topcowmoo"
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light"
        title="Frontend Mentor Profile"
        aria-label="Frontend Mentor Profile"
      >
        <SiFrontendmentor className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]" />
      </a>
    </div>
  );
};

export default Socials;
