export default function FeaturedWorkCard() {
  return (
    <div className="bg-gray-100 rounded-md w-full min-h-[200px] my-2 p-8 transition-smooth move-forward-effect  ">
      <div className="flex gap-2">
        <div className="bg-black p-2 rounded-md min-w-[60px] h-[30px] text-zinc-50 text-[12px] flex justify-center items-center">
          React JS
        </div>
        <div className="bg-black p-2 rounded-md min-w-[60px] h-[30px] text-zinc-50 text-[12px] flex justify-center items-center">
          Tailwind CSS
        </div>
      </div>

        <div className="text-[18px] my-2 font-bold">Yeliz Limited</div>
        <p>Yeliz Limited is a women's tailoring company that specializes in designing and tailoring women's clothing. They have a strong track record of achieving high levels of client satisfaction. I had the pleasure of developing their website, providing consulting services from the design stage to the final product.</p>

        <div className="flex gap-2">
            <div className="bg-gray-300 rouned-md w-[100px] p-2 rounded-md mt-2 flex justify-center items-center">Github</div>
            <div className="bg-gray-300 rouned-md w-[100px] p-2 rounded-md mt-2 flex justify-center items-center">Live</div>
        </div>

    </div>
  );
}
