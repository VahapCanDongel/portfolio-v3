import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const teaching_responsibilities = [
    "Experienced in delivering comprehensive web development courses, specialising in JavaScript and its related technologies such as React JS, Express JS, Fastify and BaaS such as Supabase, Firebase.",
    "  Adept at teaching API development, contemporary web technologies, and test-driven development with a focus on security.",
    "  Broadened skill set through delivering additional modules in IoT, Robotics, Cybersecurity and Computer Game Development at levels 3 and 4.",
    " Guided students through hands-on projects and monitored their progress, ensuring accurate record-keeping.",
    "Proactively researched and developed new course material and assignment briefs.",
    "  Contributed to the course team, regularly reviewing and evaluating relevant courses.",
    "Managed examinations and worked closely with awarding bodies.",
    "Up-to-date with current further education policies and well-versed in administrative tasks.",
  ];

  const developer_responsibilities = [
    'Consulting with client to assess their web development needs and gather specifications, designs for new website.',
    'Efficiently manage the entire project life cycle, from design, to deployment.',
    'Continuously maintaining the website by updating and adding content.    '
  ]



  return (
    <div className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Experience</div>
        </div>

        <ExperienceCard jobTitle={'Lecturer in Computing'} duration={'August 2021 - Current'} company={'College of Haringey, Enfield and Northeast London'} responsibilities={teaching_responsibilities}/>
     
        <ExperienceCard jobTitle={'Web Developer'} duration={'November 2022 - Current'} company={'Yeliz Limited'} responsibilities={developer_responsibilities} liveLink={true} link={'http://www.yelizltd.co.uk'}/>
     
      </div>
    </div>
  );
}
