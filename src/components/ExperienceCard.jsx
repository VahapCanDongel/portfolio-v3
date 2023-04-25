export default function ExperienceCard({
  company,
  jobTitle,
  duration,
  responsibilities = [],
}) {
  return (
    <div className="border-t-black border-t-[1px] border-b-black border-b-[1px] w-full min-h-[200px] my-2 p-8 transition-smooth move-forward-effect  ">
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
    </div>
  );
}
