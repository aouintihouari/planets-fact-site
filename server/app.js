import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { config } from "dotenv";

import planetRouter from "./routes/planets.route.js";

config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use("/api", limiter);
app.use("/api/v1/planets", planetRouter);

app.all(/^\/.*/, (req, res, next) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
);

process.on("unhandledRejection", (err) =>
  console.error("Unhandled Rejection:", err)
);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  const response = {
    status: err.status,
    message: err.message,
  };
  if (err.errors && err.errors.length) response.errors = err.errors;
  res.status(err.statusCode).json(response);
});

export default app;
