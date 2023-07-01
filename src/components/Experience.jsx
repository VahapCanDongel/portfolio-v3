import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const college_dev_responsibilities = [
    "Taught full stack development to college students utilising a diverse range of technologies such as JavaScript, Node.js, Next.js, React.js, Prisma, PostgreSQL, and MySQL.",
    "Integrated cloud services, specifically Azure, into the curriculum to provide students with a comprehensive understanding of current industry standards..",
    "Developed an interactive educational tool in TypeScript, Next.js, PostgreSQL, and AWS Services, functioning as a dynamic resource sharing platform for teachers and students, akin to Padlet.",
    "This innovative software solution improved teaching efficiency and enhanced student learning experiences, demonstrating capability in software development and project management.",
    "Worked cross-functionally with the IT and teaching departments, demonstrating excellent communication and team collaboration skills.",
    "Comprehensive UI component testing with Jest.",
  ];

  // const colelge_dev_projects = {
  //   title: "Interactive Learning Tools",
  //   project_resp: [
  //     'A comprehensive web application designed specifically for teachers to share and distribute lesson materials on a digital board. The platform allows teachers to upload various types of content, such as videos, documents, and images, which can be viewed by learners in designated subjects.',
  //     'Next.js for development of RESTful web services and middleware configurations.',
  //     'Applied full-stack web development with integrating authentication system',
  //     'Worked on building an intuitive and seamless user interface using React JS, Tailwind CSS and Daisy UI.',
  //     'Comprehensive UI component testing with Jest.',
  //     'Implemented efficient state management, handling complex state logic across multiple components.',
  //     ' Integrated ORM with a PostgreSQL database, efficiently managing complex queries.'
  //   ]

  // }


  return (
    <div id="experience" className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Experience</div>
        </div>

        <ExperienceCard jobTitle={'Teacher in Full Stack Development'} duration={'August 2021 - June 2023'} company={'College of Haringey, Enfield and Northeast London'} responsibilities={college_dev_responsibilities} />


      </div>
    </div>
  );
}
