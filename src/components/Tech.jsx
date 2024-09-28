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
  } from 'react-icons/si';


  function Tech() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-[-80px]">
        <div className="align-left">
          <div className="container bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-[rgba(0,_0,_0,_1)_0px_30px_90px] ">
            {/* Frontend Proficiencies section */}
            <h1 className="text-xl text-black font-bold mb-4">
              Frontend Proficiencies
            </h1>
            <div className="flex flex-wrap mb-4">
              {/* Render icons for frontend technologies */}
              <SiHtml5 size={48} color="#454545" className="m-1" />
              <SiCss3 size={48} color="#454545" className="m-1" />
              <SiJavascript size={48} color="#454545" className="m-1" />
              <SiJquery size={48} color="#454545" className="m-1" />
              <SiReact size={48} color="#454545" className="m-1" />
              <SiVite size={48} color="#454545" className="m-1" />
              <SiReactrouter size={48} color="#454545" className="m-1" />
              <SiTailwindcss size={48} color="#454545" className="m-1" />
              <SiBootstrap size={48} color="#454545" className="m-1" />
            </div>
            {/* Backend Proficiencies section */}
            <h1 className="text-xl text-black font-bold mb-4">
              Backend Proficiencies
            </h1>
            <div className="flex flex-wrap mb-4">
              {/* Render icons for backend technologies */}
              <SiNodedotjs size={48} color="#454545" className="m-1" />
              <SiExpress size={48} color="#454545" className="m-1" />
              <SiMongodb size={48} color="#454545" className="m-1" />
              <SiMongoose size={48} color="#454545" className="m-1" />
              <SiMysql size={48} color="#454545" className="m-1" />
              <SiSequelize size={48} color="#454545" className="m-1" />
              <SiJest size={48} color="#454545" className="m-1" />
              <SiPwa size={48} color="#454545" className="m-1" />
              <SiGraphql size={48} color="#454545" className="m-1" />
            </div>
        </div>
        </div>  
        </div>
    );

  }

  export default Tech;