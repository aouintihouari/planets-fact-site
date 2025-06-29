import express from "express";
import { validate } from "../middlewares/validate.js";
import {
  createPlanetSchema,
  updatePlanetSchema,
  planetParamsSchema,
} from "../validators/planet.validator.js";
import {
  createPlanet,
  getPlanetSection,
  updatePlanet,
  deletePlanet,
} from "../controllers/planets.controller.js";
import { z } from "zod";

const router = express.Router();

router.post(
  "/",
  validate(z.object({ body: createPlanetSchema })),
  createPlanet
);
router.get(
  "/:name/:section",
  validate(z.object({ params: planetParamsSchema })),
  getPlanetSection
);
router.patch(
  "/:name",
  validate(z.object({ body: updatePlanetSchema })),
  updatePlanet
);
router.delete("/:name", deletePlanet);

export default router;
