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

  const yeliz_tailoring = [
    "Developed Stock Management System",
    "Designed and implemented a comprehensive stock management system utilizing my skills in JavaScript (ES6, ES7), React.js, Next.js, and Node.js.",
    "Created an intuitive user interface with Tailwind CSS, Material UI, HTML5, and CSS3, improving usability and ensuring effective inventory tracking.",
    "Implemented robust backend services using Node.js and Next.js, coupled with Azure for seamless data management and real-time inventory updates.",
    "Utilised MySQL for database management, ensuring efficient and secure storage and retrieval of inventory information.",
    "The system's success in improving operational efficiency and reducing manual labour emphasizes my ability to offer practical software solutions that meet business needs."
  ]

  const millenium_responsibilities = [
    "Food Ordering Platform",
    "Developed a dynamic food ordering platform using TypeScript, React.js, Next.js, and Supabase for backend services.",
    "Leveraged Tailwind CSS, Daisy UI, Recharts, HTML5, and CSS3 to design an engaging and responsive user interface, facilitating a seamless online ordering experience for customers.",
    "Incorporated PostgreSQL for secure and efficient management of food items, order data, and customer information.",
    "The success of the platform in enhancing the client's online presence and boosting sales stands as a testament to my expertise in web development and my ability to leverage technology to drive business growth."
  ]

  return (
    <div id="experience" className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Experience</div>
        </div>
        <ExperienceCard jobTitle={'Teacher in Full Stack Development'} duration={'August 2021 - June 2023'} company={'College of Haringey, Enfield and Northeast London'} responsibilities={college_dev_responsibilities} />
        <ExperienceCard jobTitle={'Freelance Developer'} duration={'November 2022 - May 2023'} company={'Yeliz Tailoring'} responsibilities={yeliz_tailoring} />
        <ExperienceCard jobTitle={'Freelance Developer'} duration={'May 2022 - August 2022'} company={'Millenium Takeaway'} responsibilities={millenium_responsibilities} />
      </div>
    </div>
  );
}
