import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const teaching_responsibilities = [
    "Deliver comprehensive courses on JavaScript and related technologies, such as React JS and BaaS like Supabase, Firebase",
    "Adept at teaching API development, contemporary web technologies, and test-driven development with a focus on security.",
    "Actively stay current with the latest front-end development tools and best practices, applying this knowledge to course material.",
    "Guided students through hands-on projects and monitored their progress, ensuring accurate record-keeping.",
    "Proactively researched and developed new course material and assignment briefs.",
    "Managed projects and worked closely with clients such as KPMG and Creative Media Hub",
  ];

  const developer_responsibilities_yeliz = [
    'Web-based application development.',
    'A system tailored to streamline the order tracking process, facilitate inventory management, and provide analytical insights to drive business decision-making. Developing RESTFUL API with Next.js.',
    'Developing RESTFUL API with Next.js.',
    'Developing React Components.',
    'Implementing Cloud based development using Azure Databases (MySQL), Azure Web Apps.',
    'Leveraging the power of Recharts, the OMS offers comprehensive data visualization and reporting capabilities. It generates insightful reports on sales, inventory levels, and other key performance indicators, enabling data-driven decision-making.'
  ]

  const developer_responsibilities_linkteacher = [
    'Web based application development.',
    'A comprehensive web application designed specifically for teachers to share and distribute lesson materials on a digital board. The platform allows teachers to upload various types of content, such as videos, documents, and images, which can be viewed by learners in designated subjects.',
    'Next.js for development of RESTful web services and middleware configurations.',
    'Applied full-stack web development with integrating Supabase authentication system.',
    'Worked on building an intuitive and seamless user interface using React JS.',
    'Comprehensive UI component testing with Jest.',
    'Implemented efficient state management, handling complex state logic across multiple components.',
    'Integrated ORM with a PostgreSQL database, efficiently managing complex queries.'
  ]


  return (
    <div id="experience" className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Experience</div>
        </div>

        <ExperienceCard jobTitle={'Lecturer in Web Development'} duration={'August 2021 - Current'} company={'College of Haringey, Enfield and Northeast London'} responsibilities={teaching_responsibilities} />
        <ExperienceCard jobTitle={'Full Stack Developer Contract'} duration={'November 2022 - May 2023'} company={'Yeliz Clothes and Fabric Manufacturing'} responsibilities={developer_responsibilities_yeliz} liveLink={false} />
        <ExperienceCard jobTitle={'Full Stack Developer Intern'} duration={'May 2020 - August 2020'} company={'Linkteacher Interactive Learning'} responsibilities={developer_responsibilities_linkteacher} liveLink={false} />

      </div>
    </div>
  );
}
