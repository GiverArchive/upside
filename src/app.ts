import "reflect-metadata";

import { NextFunction, Request, Response } from "express";
import { AppError } from "./controllers/errors/AppError";

import express from "express";
import router from "./router";

const errorHandler = (error: Error, request: Request, response: Response, _next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error: ${error.message}`
  });
}

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);

export default app;