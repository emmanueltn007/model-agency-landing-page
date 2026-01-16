import navItems from "../utilities/header.js";

function Header() {
  return (
    <header className="text-white flex justify-between items-center py-8 px-16">
      <div>
        <h1 className="text-2xl">
          <span className="text-4xl font-semibold">V</span>ELORA
        </h1>
      </div>
      <nav>
        <ul className="flex gap-8">
          {navItems.map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
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
