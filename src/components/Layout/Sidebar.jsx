import { useState } from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Overview", src: "Overview", to: "/overview" },
    { title: "Users", src: "Payments", to: "/users" },
    { title: "Transactions", src: "Cashback", to: "/transactions" },
    { title: "Exchanges", src: "Exchanges", to: "/exchanges" },
    { title: "Settings", src: "Settings", gap: true, to: "/settings" },
    { title: "Log out ", src: "Logout", to: "/log" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="/assets/Right.svg"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-secondary
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/Logo.svg"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Banking
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.src}.svg`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <Link to={Menu.to}>
                  {Menu.title}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
