import { PLANETS } from "./constants/planets";

const NavBar = ({ currentPlanet, onPlanetSelect }) => {
  return (
    <ul className="font-sans-s flex list-none items-center text-white uppercase">
      {PLANETS.map((planet) => (
        <li
          key={planet.name}
          className={`relative cursor-pointer opacity-80 duration-300 before:absolute before:-top-6 before:left-0 before:h-[4px] before:w-full before:scale-x-0 before:transition-transform before:duration-300 hover:opacity-100 hover:before:scale-x-100 md:mx-6 lg:ml-16 ${planet.hoverClass} ${
            currentPlanet.toLowerCase() === planet.name.toLowerCase()
              ? "opacity-100 before:scale-x-100"
              : ""
          }`}
          onClick={() => onPlanetSelect(planet.name)}
        >
          {planet.name}
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
