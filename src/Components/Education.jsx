import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";
const Education = () => {
  return (
    <div
      id="education"
      className="h-screen max-w-4xl mx-auto text-center my-20 flex justify-center items-center"
    >
      <div>
        <div className="flex flex-col justify-between">
          <p className="text-3xl text-blue-600 pt-4 sm:text-4xl font-bold dark:text-blue-400">
            EDUCATION
          </p>
          <div className="flex flex-wrap justify-center pt-2">
            <div className="flex flex-col w-72 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
              <p className="mt-6 text-2xl sm:text-2xl font-semibold text-blue-600 text-center ">
                2020-PRESENT
              </p>
              <p className="mt-4 text-xl font-medium ">
                Bachelor of Technology in Computer Science and Information
                Technology
              </p>
              <p className="mt-3 font-normal ">
                Mahatma Jyotiba Phule Rohilkhand University
              </p>
            </div>
            <div className="flex flex-col w-72 p-10 m-6 bg-white shadow-2xl sm:w-56 rounded-xl ">
              <p className="mt-6 text-2xl font-semibold text-blue-600  ">
                2018-2020
              </p>
              <p className="mt-4 text-xl font-medium ">
                Percentage: 82.5 / 100
              </p>
              <p className="mt-3 font-normal ">
                N.E Railway Senior Secondary School, Gorakhpur (CBSE)-12th
              </p>
            </div>
          </div>
        </div>

        <ScrollIntoView selector="#skills">
          <div className="sm:py-28">
            <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 mt-5" />
          </div>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default Education;