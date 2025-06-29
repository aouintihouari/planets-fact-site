const API_BASE_URL = "http://localhost:5000/api/v1";

export const fetchPlanetSection = async (planet, section) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/planets/${planet}/${section}`,
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching planet data:", error);
    throw error;
  }
};
