import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  const college_dev_responsibilities = [
    "Web based application development.",
    "A comprehensive web application designed specifically for teachers to share and distribute lesson materials on a digital board. The platform allows teachers to upload various types of content, such as videos, documents, and images, which can be viewed by learners in designated subjects.",
    "Next.js for development of RESTful web services and middleware configurations.",
    "Applied full-stack web development with integrating authentication system.",
    "Worked on building an intuitive and seamless user interface using React JS, Tailwind CSS and Daisy UI.",
    "Comprehensive UI component testing with Jest.",
  ];

  const developer_responsibilities_creative_itc = [
    'Web based application development.',
    'A multi-tenant SaaS solution that enables data-driven decision-making for our diverse clientele. The core purpose of this project is to gather and analyse information from servers, transforming raw data into valuable analytical feedback. This data is then presented to our customers through an intuitive and interactive interface featuring comprehensive charts and other visual data representations. In addition, our system includes separate admin and customer panels to optimize user experience and facilitate platform management.',
    'Developed Node.js Rest APIs with, Express.js, MySQL, in TDD approach using Jest.',
    'Developing React Components with Material UI.',
    'Implementing Cloud based development using Azure Databases (MySQL), Azure Web Apps.',
    'Using React Chart Libraries such as Recharts.',
  ]


  return (
    <div id="experience" className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Experience</div>
        </div>

        <ExperienceCard jobTitle={'Full Stack Developer'} duration={'August 2021 - Current'} company={'College of Haringey, Enfield and Northeast London'} responsibilities={college_dev_responsibilities} />
        <ExperienceCard jobTitle={'Full Stack Developer '} duration={'November 2022 - May 2023'} company={'Creative ITC'} responsibilities={developer_responsibilities_creative_itc} liveLink={false} />

      </div>
    </div>
  );
}
