import DemoBtn from "./DemoBtn";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <>
      <header className="mx-auto py-4 sticky top-0 backdrop-filter backdrop-blur-xl bg-opacity-80 z-20 ">
        <div className="flex items-center justify-between text-sm container">
          <nav>
            <ul className="flex items-center justify-center gap-4">
              <span className="pr-3">
                <HeaderLogo />
              </span>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Home
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Retail
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Distribution
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Manufacturing
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Others
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                ERP
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Online Apps
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Softwares
              </a>
              <a className="text-neutral-500 hover:text-neutral-900 cursor-pointer transition-all ease-linear duration-200">
                Contact
              </a>
            </ul>
          </nav>
          <nav>
            <ul>
              <DemoBtn />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
