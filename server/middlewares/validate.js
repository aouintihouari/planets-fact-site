import { AppError } from "../utils/appError.js";

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      params: req.params,
      query: req.query,
    });
    next();
  } catch (error) {
    if (error.errors) {
      const errorMessages = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      next(new AppError("Validation failed", 400, errorMessages));
    } else {
      next(error);
    }
  }
};
