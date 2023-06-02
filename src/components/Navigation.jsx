import { useState } from "react";

export default function Navigation() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document.getElementById("experience").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProject = () => {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full flex justify-center h-[80px] items-center">
      <div className="flex justify-between items-center w-1/2 sm:w-[100%] md:w-[100%]">
        <ul className="visible flex gap-4 md:visible sm:hidden">
          <li className="hover:cursor-pointer" onClick={scrollToAbout}>About</li>
          <li className="hover:cursor-pointer" onClick={scrollToExperience}>Experience</li>
          <li className="hover:cursor-pointer" onClick={scrollToProject}>Projects</li>
          <li className="hover:cursor-pointer" onClick={scrollToContact}>Contact</li>
        </ul>

        <div
          className=" invisible sm:visible "
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <svg width={35} height={35} className="fill-slate-900 bg-gray-200 rounded-md p-2 sm:ml-auto" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M4 12h16" />
            <path d="M4 6h16" />
            <path d="M4 18h16" />
          </svg>


        </div>

        {dropdownVisible && (
          <ul className="bg-gray-200 absolute top-14 rounded-md flex flex-col justify-center p-4 dark:bg-gray-800 dark:border-gray-700 dark:border-[1px]">
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700" onClick={scrollToAbout}>
              About
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700" onClick={scrollToExperience}>
              Experience
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700" onClick={scrollToProject}>
              Projects
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700" onClick={scrollToContact}>
              Contact
            </li>
          </ul>
        )}
        <a href="https://profile.indeed.com/p/vahapcand-6xvbt70" target="_blank">
          <svg
            width="35"
            height="35"
            className="fill-slate-900 bg-gray-200 rounded-md p-2 sm:ml-auto"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"

          >
            <path
              fill-rule="evenodd"
              d="M1.6 2.4A2.4 2.4 0 0 1 4 0h13.131L22.4 5.269V21.6A2.4 2.4 0 0 1 20 24H4a2.4 2.4 0 0 1-2.4-2.4V2.4Zm4.8 3.995 8 .006V8l-8-.006v-1.6Zm11.2 4.798H6.4v1.6h11.2v-1.6Zm0 4.808-11.2-.012v1.6l11.2.012V16Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>

      </div>
    </div>
  );
}
