export default function FeaturedWorkCard({
  technologies = [],
  projectName,
  projectDescription,
  githubLink,
  liveLink,
}) {
  return (
    <div className="bg-gray-100 rounded-md w-full min-h-[200px] my-2 p-8 transition-smooth move-forward-effect dark:bg-gray-950">
      <div className="flex gap-2">
        {technologies.map((name, index) => (
          <div className="bg-black p-2 rounded-md min-w-[60px] h-[30px] text-zinc-50 text-[12px] flex justify-center items-center dark:bg-gray-800">
            {name}
          </div>
        ))}
      </div>

      <div className="text-[18px] my-2 font-bold">{projectName}</div>
      <p>
        {projectDescription}
      </p>

      <div className="flex gap-2">
        <a className="bg-gray-300 rouned-md w-[100px] p-2 rounded-md mt-2 flex justify-center items-center dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800" href={githubLink}>
          Github
        </a>
        <a className="bg-gray-300 rouned-md w-[100px] p-2 rounded-md mt-2 flex justify-center items-center dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800" href={liveLink}>
          Live
        </a>
      </div>
    </div>
  );
}
