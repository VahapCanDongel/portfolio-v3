export default function ExperienceCard({
  company,
  jobTitle,
  duration,
  responsibilities = [],
  liveLink = false,
  link
}) {
  return (
    <div className="border-t-black border-t-[1px] border-b-black border-b-[1px] w-full min-h-[200px] my-2 p-8 transition-smooth move-forward-effect dark:border-t-gray-800 dark:border-b-gray-800">
      <div className="flex flex-col items-center w-full">
        <div className="mr-auto font-bold text-[18px]">{company}</div>
        <div className="flex justify-between items-center w-full text-[16px]">
          <div className=" my-2 font-bold">{jobTitle}</div>
          <div>{duration}</div>
        </div>
      </div>

      <ul className="list-disc">
        {responsibilities.map((responsibility, index) => (
          <li className="">
            {responsibility}
          </li>
        ))}
      </ul>

      <ul className="list-disc">
        {/* {projects.map((project, index) => (
          <div>
            {project.title}

            <li className="">
              {project_resp.map((pro, index) => (
                { prop }
              ))}
            </li>
          </div>


        ))} */}
      </ul>

      {liveLink && (
        <a href={link} className="bg-gray-300 rouned-md w-[100px] p-2 rounded-md mt-2 flex justify-center items-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
          Live
        </a>
      )

      }
    </div>
  );
}
