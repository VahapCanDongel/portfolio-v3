import { useState } from "react";

export default function Navigation() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="w-full flex justify-center h-[80px] items-center">
      <div className="flex justify-between items-center w-1/2 sm:w-[100%] md:w-[100%]">
        <ul className="visible flex gap-4 md:visible sm:hidden">
          <li>About</li>
          <li>Experience</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>

        <div
          className=" invisible sm:visible "
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <svg
            width="35"
            height="35"
            className="fill-slate-900 bg-gray-200 rounded-md p-2 sm:ml-auto"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M24 3.15H0v-1.5h24v1.5Zm0 6.4H0v-1.5h24v1.5Zm0 6.4H0v-1.5h24v1.5Zm0 6.4H0v-1.5h24v1.5Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        {dropdownVisible && (
          <ul className="bg-gray-200 absolute top-14 rounded-md flex flex-col justify-center p-4 dark:bg-gray-800 dark:border-gray-700 dark:border-[1px]">
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700">
              About
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700">
              Experience
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700">
              Project
            </li>
            <li className="text-[20px] hover:bg-gray-100 w-full p-1 rounded-md transition-smooth dark:hover:bg-gray-700">
              Contact
            </li>
          </ul>
        )}

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
      </div>
    </div>
  );
}
