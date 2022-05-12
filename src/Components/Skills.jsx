import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
const Skills = () => {
  return (
    <>
      <div className="max-w-4xl mb-20 mx-auto text-center ">
        <p className="animate-bounce text-2xl text-blue-600 dark:text-blue-400 pt-4 sm:text-4xl font-bold ">
          Skills I Learn
        </p>
        <div className="flex flex-wrap justify-center pt-2">
          <div className="flex flex-col w-48 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
            <FaHtml5 className="mx-auto text-4xl text-red-500" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
              HTML
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
            <FaCss3Alt className="mx-auto text-4xl text-blue-600" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
              CSS
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
            <SiJavascript className="mx-auto text-4xl text-yellow-500" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
              JavaScript
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
            <FaReact className="mx-auto text-4xl text-[#064663]" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
              React Js
            </p>
          </div>
          <div className="flex flex-col w-48 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
            <SiTailwindcss className="mx-auto text-4xl text-cyan-400" />
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-center ">
              Tailwind Css
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
