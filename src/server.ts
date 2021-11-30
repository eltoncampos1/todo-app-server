import 'reflect-metadata'

import { AppError } from "errors/AppError";
import express, {Request, Response, NextFunction} from "express";
import { todoRoutes } from "./routes";
import  './database'

const app = express();


app.use(express.json())
app.use(todoRoutes)


app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal server error - ${err.message}`,
    });
  },
);

app.listen(3333, () => console.log("App is Running"));
