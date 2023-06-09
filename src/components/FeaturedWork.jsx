import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWork() {
  return (
    <div id="project" className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Featured Work</div>
        </div>
        <FeaturedWorkCard
          technologies={["Next JS", "Tailwind CSS", "Supabase"]}
          projectName={"CGPrompT"}
          projectDescription={
            "Designed and created a dynamic web application that is specifically tailored for Chat GPT users. The application enables users to share prompts, view useful prompts posted by other users, rate posted prompts, and provide feedback comments to help enhance the overall user experience."
          }
          githubLink={"https://github.com/VahapCanDongel/prompt-engineer"}
          liveLink={"https://prompt-engineer.vercel.app/"}
        />

        <FeaturedWorkCard
          technologies={["React JS", "Tailwind CSS"]}
          projectName={"Car Hire"}
          projectDescription={
            "This website boasts an attractive and responsive interface, ensuring an optimal viewing experience across a multitude of devices and screen sizes. Users are presented with an extensive range of vehicle options, each accompanied by comprehensive specifications and details. The platform further enhances user experience through a straightforward booking process, where customers can easily choose their preferred vehicle, set rental duration, and complete the reservation. The Car Hire website offers a seamless and intuitive car rental experience, highlighting my ability to create practical, user-centered digital solutions."
          }
          githubLink={"https://github.com/VahapCanDongel/car-hire"}
          liveLink={"https://car-hire-nine.vercel.app/"}
        />

        <FeaturedWorkCard
          technologies={["React JS", "Tailwind CSS", "Zustand"]}
          projectName={"ShushiShop"}
          projectDescription={
            "This sushi website is a personal project created to practice and showcase frontend development skills and design techniques. The website features a visually appealing and responsive design, optimized for various devices and screen sizes. Users can browse through a diverse selection of sushi dishes, view detailed descriptions, and add items to their cart for a seamless online ordering experience."
          }
          githubLink={"https://github.com/VahapCanDongel/shuishop/"}
          liveLink={"https://shuishop.vercel.app/"}
        />



      </div>
    </div>
  );
}
