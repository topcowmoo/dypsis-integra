import {
  SiGithub,
  SiLinkedin,
  SiFrontendmentor,
  SiWakatime,
} from "react-icons/si";

const iconSize =
  "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px]";

function Socials() {
  return (
    <section aria-labelledby="social-links">
      {/* Descriptive Heading for Accessibility */}
      <h2 id="social-links" className="sr-only">
        Social Media Links
      </h2>

      <div className="flex gap-4 dark:text-alltext-dark text-alltext-light">
        <a
          href="https://github.com/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light focus:outline-none focus:ring-4 focus:ring-title-light dark:focus:ring-title-dark focus:text-highlight-light dark:focus:text-highlight-dark rounded-full"
          title="Visit my Github Profile"
          aria-label="Visit my Github Profile"
        >
          <SiGithub className={iconSize} />
        </a>

        <a
          href="https://www.linkedin.com/in/salvatore-mammoliti-694b6b28b/"
          target="_blank"
          rel="noopener noreferrer"
           className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light focus:outline-none focus:ring-4 focus:ring-title-light dark:focus:ring-title-dark focus:text-highlight-light dark:focus:text-highlight-dark rounded-none"
          title="Visit my LinkedIn Profile"
          aria-label="Visit my LinkedIn Profile"
        >
          <SiLinkedin className={iconSize} />
        </a>

        <a
          href="https://wakatime.com/@topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
           className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light focus:outline-none focus:ring-4 focus:ring-title-light dark:focus:ring-title-dark focus:text-highlight-light dark:focus:text-highlight-dark rounded-full"
          title="Visit my WakaTime Profile"
          aria-label="Visit my WakaTime Profile"
        >
          <SiWakatime className={iconSize} />
        </a>

        <a
          href="https://www.frontendmentor.io/profile/topcowmoo"
          target="_blank"
          rel="noopener noreferrer"
           className="dark:text-alltext-dark dark:hover:text-highlight-dark text-alltext-light hover:text-highlight-light focus:outline-none focus:ring-4 focus:ring-title-light dark:focus:ring-title-dark focus:text-highlight-light dark:focus:text-highlight-dark rounded-full"
          title="Visit my Frontend Mentor Profile"
          aria-label="Visit my Frontend Mentor Profile"
        >
          <SiFrontendmentor className={iconSize} />
        </a>
      </div>
    </section>
  );
}

export default Socials;
