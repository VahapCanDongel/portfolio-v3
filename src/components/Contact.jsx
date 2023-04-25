export default function Contact() {
  return (
    <div className="w-full flex justify-center my-20">
      <div className="flex justify-center items-center w-1/2 flex-col gap-4 sm:w-[100%] md:w-[100%]">
        <div className="flex flex-col mr-auto">
          <div className="font-bold text-[27px]">Contact</div>
          <div>You can also directly email me at vahapcandongel@hotmail.com</div>
        </div>

        <form className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              className="p-2 bg-gray-200 rounded-md h-[45px] focus:outline-gray-300 border-[1px] border-gray-300 transition-smooth dark:bg-gray-900 dark:border-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              className="p-2 bg-gray-200 rounded-md h-[45px] focus:outline-gray-300 border-[1px] border-gray-300 transition-smooth dark:bg-gray-900 dark:border-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Message</label>
            <textarea name="message" id="" cols="30" rows="10" className="p-2 bg-gray-200 rounded-md min-h-[200px] focus:outline-gray-300  border-[1px] border-gray-300 resize-none transition-smooth dark:bg-gray-900 dark:border-gray-700"></textarea>
          </div>
        </form>

        <div className="w-[120px] bg-gray-200 rounded-md h-[45px] focus:outline-gray-300 flex justify-center items-center border-[1px] border-gray-300 hover:bg-gray-300 hover:border-gray-400 transition-smooth dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800">Send</div>

      </div>
    </div>
  );
}
