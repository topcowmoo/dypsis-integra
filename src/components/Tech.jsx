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

const iconStyles =
  "m-1 w-[22px] h-[22px] md:w-[30px] md:h-[30px] dark:text-alltext-dark text-alltext-light";

function Tech() {
  return (
    <div>
      {/* Frontend Proficiencies section */}
      <section aria-labelledby="frontend-proficiencies">
        <h2 id="frontend-proficiencies" className="dark:text-title-dark text-title-light mb-3 text-[22px] md:text-[27px] xl:text-[34px]">
          Frontend Proficiencies
        </h2>
        <div className="flex flex-wrap">
          <SiHtml5 className={iconStyles} aria-label="HTML5 - Web Markup Language" />
          <SiCss3 className={iconStyles} aria-label="CSS3 - Cascading Style Sheets" />
          <SiJavascript className={iconStyles} aria-label="JavaScript - Programming Language" />
          <SiJquery className={iconStyles} aria-label="jQuery - JavaScript Library" />
          <SiReact className={iconStyles} aria-label="React - JavaScript Library for UI" />
          <SiVite className={iconStyles} aria-label="Vite - JavaScript Build Tool" />
          <SiReactrouter className={iconStyles} aria-label="React Router - Client-side Routing" />
          <SiTailwindcss className={iconStyles} aria-label="Tailwind CSS - Utility-first CSS Framework" />
          <SiBootstrap className={iconStyles} aria-label="Bootstrap - CSS Framework" />
        </div>
      </section>

      {/* Backend Proficiencies section */}
      <section aria-labelledby="backend-proficiencies">
        <h2 id="backend-proficiencies" className="dark:text-title-dark text-title-light mb-3 mt-4 text-[22px] md:text-[27px] xl:text-[34px]">
          Backend Proficiencies
        </h2>
        <div className="flex flex-wrap">
          <SiNodedotjs className={iconStyles} aria-label="Node.js - JavaScript Runtime" />
          <SiExpress className={iconStyles} aria-label="Express - Web Framework for Node.js" />
          <SiMongodb className={iconStyles} aria-label="MongoDB - NoSQL Database" />
          <SiMongoose className={iconStyles} aria-label="Mongoose - MongoDB Object Modeling" />
          <SiMysql className={iconStyles} aria-label="MySQL - Relational Database" />
          <SiSequelize className={iconStyles} aria-label="Sequelize - ORM for SQL Databases" />
          <SiJest className={iconStyles} aria-label="Jest - JavaScript Testing Framework" />
          <SiPwa className={iconStyles} aria-label="PWA - Progressive Web App" />
          <SiGraphql className={iconStyles} aria-label="GraphQL - API Query Language" />
          <FaGit className={iconStyles} aria-label="Git - Version Control System" />
          <TbApi className={iconStyles} aria-label="API - Application Programming Interface" />
        </div>
      </section>
    </div>
  );
}

export default Tech;
