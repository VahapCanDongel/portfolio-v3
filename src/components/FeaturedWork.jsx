import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWork() {
  return (
    <div className="w-full flex justify-center my-20">
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
          technologies={["Next JS", "Tailwind CSS", "Supabase"]}
          projectName={"Linkteacher"}
          projectDescription={
            "A comprehensive web application designed specifically for teachers to share and distribute lesson materials on a digital board. The platform allows teachers to upload various types of content, such as videos, documents, and images, which can be viewed by learners in designated subjects"
          }
          githubLink={"https://github.com/VahapCanDongel/vlearn-2"}
          liveLink={"https://vlearn-2.vercel.app/login"}
        />
      </div>
    </div>
  );
}
