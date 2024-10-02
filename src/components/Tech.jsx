import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiReact,
  SiVite,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiSequelize,
  SiJest,
  SiPwa,
  SiGraphql,
} from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";


function Tech() {
  return (
    <div>
      {/* Frontend Proficiencies section */}
      <h1 className="dark:text-title-dark text-title-light mb-3 text-[22px] md:text-[27px] xl:text-[34px]">
        Frontend Proficiencies
      </h1>
      <div className="flex flex-wrap">
        <SiHtml5 className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiCss3 className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiJavascript className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiJquery className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiReact className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiVite className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiReactrouter className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiTailwindcss className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiBootstrap className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
      </div>

      {/* Backend Proficiencies section */}
      <h1 className="dark:text-title-dark text-title-light mb-3 mt-4 text-[22px] md:text-[27px] xl:text-[34px]">
        Backend Proficiencies
      </h1>
      <div className="flex flex-wrap">
        <SiNodedotjs className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiExpress className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiMongodb className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiMongoose className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiMysql className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiSequelize className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiJest className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiPwa className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <SiGraphql className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <FaGit className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
        <TbApi className="m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light" />
      </div>
    </div>
  );
}

export default Tech;
