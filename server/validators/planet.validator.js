import { z } from "zod";

const imagePathSchema = z
  .string()
  .regex(
    /^assets\/.+\.(jpg|jpeg|png|gif|svg)$/i,
    "Image path must be in format 'assets/filename.extension'"
  );

const sectionSchema = z.object({
  content: z.string().min(10, "Content must be at least 10 characters"),
  source: z.string().url("Source must be a valid URL"),
  image: imagePathSchema,
});

const geologySchema = z.object({
  content: z.string().min(10, "Content must be at least 10 characters"),
  source: z.string().url("Source must be a valid URL"),
  image: z
    .array(imagePathSchema)
    .min(1, "At least one geology image is required"),
});

export const createPlanetSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  overview: sectionSchema,
  structure: sectionSchema,
  geology: geologySchema,
  rotation: z.string().min(3, "Invalid rotation value"),
  revolution: z.string().min(3, "Invalid revolution value"),
  radius: z.string().min(3, "Invalid radius value"),
  temperature: z.string().min(2, "Invalid temperature value"),
});

export const updatePlanetSchema = createPlanetSchema
  .partial()
  .refine(
    (data) => Object.keys(data).length > 0,
    "At least one field must be provided for update"
  );

export const planetParamsSchema = z.object({
  name: z.string().min(2),
  section: z.enum(["overview", "structure", "geology"]),
});
