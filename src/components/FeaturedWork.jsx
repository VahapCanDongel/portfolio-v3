import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWork() {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="flex justify-center w-1/2 flex-col">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Featured Work</div>
        </div>
        
        <FeaturedWorkCard/>
      
      </div>
    </div>
  );
}
