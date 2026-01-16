import { useState } from "react";
import navItems from "../utilities/header.js";

function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const hamburgerIcon = "M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z";
  const closeIcon = "M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z";

  const handleMenuToggle = () => SetIsOpen(prev => !prev);


  return (
    <header className="text-white flex justify-between items-center py-8 px-16 relative">
      <div>
        <h1 className="text-2xl">
          <span className="text-6xl font-semibold">V</span>ELORA
        </h1>
      </div>

      {/* MOBILE NAV */}
      <nav className="md:hidden">
        <button className="cursor-pointer bg-yellow text-white" onClick={handleMenuToggle}>
          <svg className="text-white w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={isOpen ? closeIcon : hamburgerIcon}
          fill="currentColor" /></svg>
        </button>
        <div className={`text-black bg-white absolute top-full left-16 right-16 p-8 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <ul className="flex flex-col items-center text-center gap-4">
            {navItems.map((item) => {
              return (
                <li
                  key={item}
                  className="font-semibold cursor-pointer w-fit text-lg md:text-xl tracking-[0.25rem] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-black hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* DESKTOP NAV */}
      <nav className="max-md:hidden">
        <ul className="flex gap-8">
          {navItems.map((item) => {
            return (
              <li
                key={item}
                className="text-lg md:text-xl tracking-[0.25rem] cursor-pointer font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
