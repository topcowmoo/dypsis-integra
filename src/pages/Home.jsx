import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Tech from "../components/Tech";

const Home = () => {
  return (
    <>
      {/* Home Section */}
      <div
        className="relative flex flex-col justify-center items-center min-h-screen"
        id="home"
      >
        <header className="w-full flex flex-col items-center dark:text-title-dark text-title-light text-center">
          <h1 className="text-[34px] sm:text-[65px] lg:text-[80px]">
            Salvatore Mammoliti
          </h1>
          <h2 className="text-[23px] md:text-[45px] lg:text-[60px] dark:text-alltext-dark text-alltext-light">
            Full-Stack Web Developer
          </h2>
          <div className="flex justify-center mt-7 mb-44">
            <Socials />
          </div>
        </header>
      </div>

      {/* About Section */}
      <div className="container-about" id="about">
  <section className="relative flex flex-col items-center text-center">
    <div className="relative w-full h-full min-w-[390px]">
      <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
        <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
          <h1 className="w-full text-[26px] md:text-[40px]">About Me</h1>
          <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[20px] 2xl:text-[25px] leading-normal mt-4">
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
          <div className="relative mt-6 w-full flex justify-center">
            <Tech />
          </div>
        </article>
      </div>
    </div>
  </section>
</div>


      {/* Project Section */}
      <div className="container-projects" id="projects">
        <section className="relative flex flex-col items-center text-center">
          <div className="relative w-full h-full min-w-[390px]">
            <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
              <article className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
                <h1 className="w-full text-[26px] md:text-[40px]">Projects</h1>
                <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[20px] leading-normal px-1 mt-4">
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
      <div className="container-contact" id="contact">
        <section className="relative flex flex-col items-center text-center mb-16">
          {/* Ensure the height is reserved for the whole container */}
          <div className="relative w-full h-auto min-h-[300px] min-w-[390px]">
            {/* Set max-width to prevent content jumping on larger screens */}
            <div className="relative flex flex-grow flex-col items-center justify-center mx-4 sm:mx-8 md:mx-12 my-4 sm:my-12">
              <div className="w-full md:w-[80%] lg:w-[70%] flex flex-grow flex-col items-center sm:items-start dark:text-title-dark text-title-light text-center sm:text-left">
                {/* Contact heading */}
                <h3 className="w-full text-[26px] md:text-[40px] mb-4">
                  Contact
                </h3>

                {/* Contact description */}
                <p className="dark:text-alltext-dark text-alltext-light w-full text-[16px] md:text-[20px] leading-normal">
                  I&apos;m always open to discussing new opportunities and
                  potential collaborations. Feel free to reach out to me
                  directly at{" "}
                  <span className="hover:underline cursor-pointer dark:text-highlight-dark text-highlight-light">
                    mammoliti.sam@gmail.com
                  </span>
                  . I&apos;d love to hear from you!
                </p>

                {/* Button with reserved space */}
                <div className="w-full mt-10 flex justify-center items-center">
                  <button
                    onClick={() =>
                      (window.location.href = "mailto:mammoliti.sam@gmail.com")
                    }
                    className="rounded-lg dark:bg-white/10 bg-black bg-opacity-10 px-6 py-3 text-[13px] md:text-[17px] lg:text-[21px] dark:text-alltext-dark text-alltext-light border-transparent border-2 dark:hover:border-highlight-dark hover:border-highlight-light transition-colors duration-200 ease-in-out"
                    aria-label="Email me"
                  >
                    Let&apos;s Chat
                  </button>
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
