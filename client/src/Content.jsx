import { SECTIONS, MOBILE_NAV_ITEMS, PLANETS } from "./constants/planets";

const Content = ({
  planetData,
  currentSection,
  onSectionSelect,
  loading,
  error,
}) => {
  if (loading)
    return (
      <section className="relative flex min-h-[400px] items-center justify-center md:py-12 lg:px-8">
        <div className="text-xl text-white">Loading...</div>
      </section>
    );
  if (error)
    return (
      <section className="relative flex min-h-[400px] items-center justify-center md:py-12 lg:px-8">
        <div className="text-xl text-red-400">Error: {error}</div>
      </section>
    );
  if (!planetData)
    return (
      <section className="relative flex min-h-[400px] items-center justify-center md:py-12 lg:px-8">
        <div className="text-xl text-white">No data available</div>
      </section>
    );
  const currentPlanet = PLANETS.find(
    (planet) => planet.name === planetData.name,
  );
  const planetColor = currentPlanet?.class || "bg-gray-500";
  const currentPlanetBorder = PLANETS.find(
    (planet) => planet.name === planetData.name,
  );
  const planetBorder = currentPlanetBorder?.border || "border-gray-500";
  return (
    <section className="relative md:py-12 lg:px-8">
      <nav className="md:hidden">
        <ul className="flex justify-between p-4 text-white">
          {MOBILE_NAV_ITEMS.map((item, index) => (
            <li
              key={item}
              className={`cursor-pointer transition-opacity hover:opacity-100 ${
                currentSection === SECTIONS[index].id
                  ? `border-b-2 ${planetBorder} pb-2 opacity-100`
                  : "opacity-75"
              }`}
              onClick={() => onSectionSelect(SECTIONS[index].id)}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mb-6 h-[.25px] w-full bg-[#979797]"></div>
      </nav>
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-col items-center gap-16 md:gap-32 lg:mt-10 lg:flex-row lg:gap-24">
          <div className="flex flex-1 justify-center md:mt-24 lg:mt-0 lg:justify-center">
            {currentSection === "geology" ? (
              <div className="relative">
                <img
                  className="md:h-[184px] md:w-[184px] lg:h-[290px] lg:w-[290px]"
                  src={planetData.image[0]}
                  alt={`${planetData.name} ${currentSection}`}
                />
                <img
                  className="relative bottom-[18%] left-[20%] h-[199px] w-[163px]"
                  src={planetData.image[1]}
                  alt={`${planetData.name} ${currentSection}`}
                />
              </div>
            ) : (
              <img
                className="md:h-[184px] md:w-[184px] lg:h-[290px] lg:w-[290px]"
                src={planetData.image}
                alt={`${planetData.name} ${currentSection}`}
              />
            )}
          </div>
          <div className="max-w-lg grid-cols-2 text-center md:grid md:text-left lg:block lg:flex-1">
            <div>
              <h1 className="mb-6 text-6xl font-light tracking-wider text-white md:-ml-24 lg:text-7xl">
                {planetData.name?.toUpperCase() || "MERCURY"}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-white opacity-90 md:-ml-24">
                {planetData.content || "Loading planet information..."}
              </p>
              <div className="mb-12 flex items-center justify-center gap-2 text-sm text-white opacity-60 md:-ml-24 md:justify-start">
                <span>Source:</span>
                <a
                  href={planetData.source}
                  className="font-semibold underline transition-opacity hover:opacity-100"
                >
                  {planetData.source || "Wikipedia"}
                </a>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden flex-col gap-4 md:mt-8 md:ml-10 md:flex md:w-[120%] lg:-ml-24">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionSelect(section.id)}
                  className={`flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold tracking-wider text-white transition-colors duration-300 ${
                    currentSection === section.id
                      ? `${planetColor}`
                      : "bg-transparent hover:bg-white/10"
                  }`}
                >
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
