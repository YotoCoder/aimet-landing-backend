import express, { Application } from "express"
import morgan from "morgan";

export const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));




