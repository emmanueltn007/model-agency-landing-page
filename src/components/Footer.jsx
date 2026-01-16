import items from "../utilities/footer";
import socials from "../utilities/social.icons";

function Footer() {
  return (
    <section className="bg-gray-950 text-white max-md:text-center py-8 px-16 flex flex-col gap-8">
      <h1 className="text-2xl">
          <span className="text-6xl font-semibold">V</span>ELORA
        </h1>
      <div className="flex flex-col max-md:gap-8 md:flex-row md:justify-between">
        <div>
          <ul className="flex flex-col max-md:items-center md:flex-row gap-4">
            {items.map((items) => {
              return (
                <li
                  key={items}
                  className="text-lg md:text-xl tracking-[0.25rem] w-fit cursor-pointer font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300 after:ease-in-out"
                >
                  {items}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-lg md:text-xl tracking-[0.25rem]">
          <span>
            <span>Email:</span>
            bookings@velora.com
          </span>
          <span>
            <span>Tel:</span>
            +27 78 781 9070
          </span>
        </div>
        <div className="flex max-md:ml-auto max-md:mr-auto gap-4">
          {socials.map((social) => {
            return (
              <a key={social} href="#">
                <svg
                  className="w-8 h-8 hover:scale-110 transtion ease-in-out duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d={social} fill="currentColor" />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
      <p className="tracking-[0.25rem] md:text-center">© 2026 Velora. All rights reserved.</p>
    </section>
  );
}

export default Footer;
