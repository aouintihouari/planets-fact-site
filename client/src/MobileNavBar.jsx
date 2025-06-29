import { PLANETS } from "./constants/planets";

const MobileNavBar = ({ toggleMenu, currentPlanet, onPlanetSelect }) => {
  return (
    <aside
      className={`${toggleMenu ? "flex" : "hidden"} bg-dark font-sans-s absolute z-50 w-full flex-col md:hidden`}
    >
      <ul>
        {PLANETS.map((planet, idx) => (
          <div key={planet.name}>
            <li
              className={`flex cursor-pointer items-center justify-between p-4 text-[15px] leading-[25px] font-bold tracking-[1.364px] text-white uppercase transition-opacity hover:opacity-80 ${
                currentPlanet.toLowerCase() === planet.name.toLowerCase()
                  ? "opacity-100"
                  : "opacity-75"
              }`}
              onClick={() => onPlanetSelect(planet.name)}
            >
              <span className="flex items-center">
                <span
                  className={`mr-4 block h-[20px] w-[20px] rounded-[100%] ${planet.class}`}
                ></span>
                {planet.name}
              </span>
              <span className="flex items-center">
                <img src="/assets/icon-chevron.svg" alt="" />
              </span>
            </li>
            <div
              className={`${idx + 1 === PLANETS.length ? "hidden" : ""} my-4 h-[.5px] w-full bg-[#979797] md:my-5`}
            ></div>
          </div>
        ))}
      </ul>
    </aside>
  );
};

export default MobileNavBar;
