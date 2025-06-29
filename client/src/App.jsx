import { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { fetchPlanetSection } from "./services/api";
import { DEFAULT_PLANET, DEFAULT_SECTION } from "./constants/planets";

const App = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState(DEFAULT_PLANET);
  const [currentSection, setCurrentSection] = useState(DEFAULT_SECTION);
  const [planetData, setPlanetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  const handlePlanetSelect = (planet) => {
    setCurrentPlanet(planet);
    setToggleMenu(false); // Close mobile menu when planet is selected
  };

  const handleSectionSelect = (section) => {
    setCurrentSection(section);
  };

  // Fetch planet data when planet or section changes
  useEffect(() => {
    const loadPlanetData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchPlanetSection(
          currentPlanet.toLowerCase(),
          currentSection,
        );
        setPlanetData(data);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load planet data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPlanetData();
  }, [currentPlanet, currentSection]);

  return (
    <main className="main bg-dark h-full max-w-screen overflow-x-hidden">
      <Header
        toggleMenu={toggleMenu}
        onToggleMenu={handleToggleMenu}
        currentPlanet={currentPlanet}
        onPlanetSelect={handlePlanetSelect}
      />
      <Content
        planetData={planetData}
        currentSection={currentSection}
        onSectionSelect={handleSectionSelect}
        loading={loading}
        error={error}
      />
      <Footer planetData={planetData} loading={loading} />
    </main>
  );
};

export default App;
