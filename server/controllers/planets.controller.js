import Planet from "../models/Planet.js";
import { AppError } from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

const capitalizeFirst = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const getPlanetSection = catchAsync(async (req, res, next) => {
  const { name, section } = req.params;
  const capitalizedName = capitalizeFirst(name);
  const planet = await Planet.findOne({ name: capitalizedName }).select(
    `name rotation revolution radius temperature ${section}.content ${section}.source ${section}.image`
  );
  if (!planet) return next(new AppError("No planet found with that name", 404));
  const response = {
    name: planet.name,
    rotation: planet.rotation,
    revolution: planet.revolution,
    radius: planet.radius,
    temperature: planet.temperature,
    content: planet[section].content,
    source: planet[section].source,
    image:
      section === "geology"
        ? [planet[section].image[0], planet[section].image[1]]
        : planet[section].image,
  };
  res.status(200).json({ status: "success", data: response });
});

export const createPlanet = catchAsync(async (req, res, next) => {
  const newPlanet = await Planet.create(req.body);
  res.status(201).json({
    status: "success",
    data: { planet: newPlanet },
  });
});

export const updatePlanet = catchAsync(async (req, res, next) => {
  const { name } = req.params;
  const capitalizedName = capitalizeFirst(name);
  const planet = await Planet.findOneAndUpdate(
    { name: capitalizedName },
    req.body,
    { new: true, runValidators: true }
  );
  if (!planet) return next(new AppError("No planet found with that name", 404));
  res.status(200).json({ status: "success", data: { planet } });
});

export const deletePlanet = catchAsync(async (req, res, next) => {
  const { name } = req.params;
  const capitalizedName = capitalizeFirst(name);
  const planet = await Planet.findOneAndDelete({ name: capitalizedName });
  if (!planet) return next(new AppError("No planet found with that name", 404));
  res.status(204).json({ status: "success", data: null });
});
