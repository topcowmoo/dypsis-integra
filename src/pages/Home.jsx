import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Tech from "../components/Tech";
import Button from "../components/Button";
import ReactGA from "react-ga4";

const handleContactClick = () => {
  ReactGA.event({
    category: "Button",
    action: "Clicked Contact Button",
    label: "Let's Connect Button",
  });
  window.location.href = "mailto:mammoliti.sam@gmail.com";
};

// Email Link Click Handler
const handleEmailClick = () => {
  ReactGA.event({
    category: "Link",
    action: "Clicked Email Link",
    label: "Email Me",
  });
};

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div
        className="relative flex flex-col justify-center items-center min-h-screen"
        id="home"
      >
        <header className="w-full flex flex-col items-center dark:text-title-dark text-title-light text-center">
          <h1
            className="text-[34px] sm:text-[65px] lg:text-[72px] xl:text-[80px]"
            id="home-heading"
          >
            Salvatore Mammoliti
          </h1>
          <h2 className="text-[23px] md:text-[45px] lg:text-[50px] xl:text-[60px] dark:text-alltext-dark text-alltext-light">
            Full-Stack Web Developer
          </h2>
          <div className="flex justify-center mt-7 mb-44">
            <Socials />
          </div>
        </header>
      </div>

      {/* About Section */}
      <div
        className="container-about"
        id="about"
        aria-labelledby="about-heading"
      >
        <section className="relative flex flex-col items-center text-center">
          <div className="relative w-full h-full min-w-[390px]">
            <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
              <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
                <h2
                  className="w-full text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px]"
                  id="about-heading"
                >
                  About Me
                </h2>
                <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] leading-normal mt-4">
                  Hey! I’m a full-stack web developer passionate about creating
                  high-quality web applications and platforms. I love bringing a
                  touch of creativity and design to everything I build, ensuring
                  that user experience is always top-notch. You can find me in
                  all things web development under the moniker{" "}
                  <span className="dark:text-highlight-dark text-highlight-light">
                    topcowmoo
                  </span>{" "}
                  — feel free to connect!
                </p>
                {/* Tech section centered */}
                <div className="relative mt-6 w-full flex justify-center lg:justify-start">
                  <Tech />
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      {/* Project Section */}
      <div
        className="container-projects"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <section className="relative flex flex-col items-center text-center">
          <div className="relative w-full h-full min-w-[390px]">
            <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
              <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
                <h2
                  className="w-full text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px]"
                  id="projects-heading"
                >
                  Projects
                </h2>
                <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] leading-normal px-1 mt-4">
                  Explore my recent projects to see how I bring ideas to life
                  through efficient,{" "}
                  <span className="dark:text-highlight-dark text-highlight-light">
                    scalable
                  </span>{" "}
                  solutions and well-crafted applications.
                </p>
              </article>
            </div>
          </div>
          <div className="w-[90%] md:w-[90%] lg:w-[75%] mx-auto">
            <Projects />
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div
        className="container-contact"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <section className="relative flex flex-col items-center text-center mb-2">
          <div className="relative w-full h-auto min-h-[300px] min-w-[390px]">
            <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
              <div className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
                <h2
                  className="w-full text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] mb-4"
                  id="contact-heading"
                >
                  Contact
                </h2>
                <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[25px] leading-normal">
                  I&apos;m always open to discussing new opportunities and
                  potential{" "}
                  <span className="dark:text-highlight-dark text-highlight-light">
                  collaborations
                  </span>.{" "} Feel free to reach out to me
                  directly at{" "}
                  <a
                    href="mailto:mammoliti.sam@gmail.com"
                    className="hover:underline cursor-pointer dark:text-alltext-dark text-alltext-light focus:outline-none focus:ring-2 focus:ring-focusRing-light dark:focus:ring-focusRing-dark"
                    onClick={handleEmailClick} // Track email link click
                  >
                    mammoliti.sam@gmail.com
                  </a>
                  . I&apos;d love to hear from you!
                </p>
                <div className="w-full mt-10 flex justify-center items-center">
                  <Button
                    text="Let's Connect"
                    className="text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] px-3 py-2"
                    onClick={handleContactClick} // Track button click
                    ariaLabel="Email me"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
