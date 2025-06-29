import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const Header = ({
  toggleMenu,
  onToggleMenu,
  currentPlanet,
  onPlanetSelect,
}) => {
  return (
    <>
      <header className="flex items-center justify-between p-4 md:flex-col lg:flex-row lg:px-10 lg:py-6">
        <p className="font-sans text-[28px] leading-[36px] tracking-[-1.05px] text-white md:mt-6 md:mb-8 lg:my-0">
          THE PLANETS
        </p>
        <div className="hidden md:block">
          <NavBar
            currentPlanet={currentPlanet}
            onPlanetSelect={onPlanetSelect}
          />
        </div>
        <div onClick={onToggleMenu} className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill={`${toggleMenu ? "#979797" : "#fff"}`} fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </div>
      </header>
      <div className="my-1 h-[.25px] w-full bg-[#979797] md:my-3"></div>
      <MobileNavBar
        toggleMenu={toggleMenu}
        currentPlanet={currentPlanet}
        onPlanetSelect={onPlanetSelect}
      />
    </>
  );
};

export default Header;
