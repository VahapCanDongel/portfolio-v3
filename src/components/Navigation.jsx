export default function Navigation() {
  return (
    <div className="w-full flex justify-center h-[80px] items-center">
      <div className="flex justify-between w-1/2">
        <ul className="flex gap-4">
          <li>About</li>
          <li>Experience</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
     
        <svg
          width="35"
          height="35"
            className="fill-slate-900 bg-gray-200 rounded-md p-2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.8 3.199V0h-1.6v3.199h1.6Z"></path>
          <path d="M5.131 3.997 2.4 1.267 1.269 2.4 4 5.13l1.131-1.132Z"></path>
          <path d="m20 5.13 2.73-2.73-1.13-1.132-2.732 2.73 1.13 1.131Z"></path>
          <path d="M12 6.396a5.598 5.598 0 1 0 0 11.194 5.598 5.598 0 1 0 0-11.194Z"></path>
          <path d="M3.2 11.193H0v1.6h3.2v-1.6Z"></path>
          <path d="M24 11.193h-3.2v1.6H24v-1.6Z"></path>
          <path d="m2.4 22.718 2.731-2.73-1.13-1.132-2.732 2.73 1.13 1.132Z"></path>
          <path d="M22.731 21.586 20 18.856l-1.131 1.132 2.731 2.73 1.131-1.132Z"></path>
          <path d="M12.8 23.985v-3.199h-1.6v3.2h1.6Z"></path>
        </svg>
      </div>
    </div>
  );
}
