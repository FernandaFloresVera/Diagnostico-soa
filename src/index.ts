import express from "express";
import dotenv from "dotenv";
import { Signale } from "signale";
import morgan from "morgan";
import syncConnection from "./database/mysql/connection";
import { } from "../tsconfig.json";
import cors from "cors";
import { studentRouter } from "./routers/student.router";
import { tutorRouter } from "./routers/tutor.router";
import { subjectRouter } from "./routers/subject.router";


export const app = express();
const logger = new Signale();

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 3000;
const API_PREFIX = process.env.API_PREFIX || "/api/v1";

app.options("*", cors())
app.use(cors())

app.use(`${API_PREFIX}/tutors`, tutorRouter);
app.use(`${API_PREFIX}/students`, studentRouter);
app.use(`${API_PREFIX}/subjects`, subjectRouter);

async function startServer() {
    await syncConnection();
    app.listen(PORT, () => {
        logger.success(`Server running on http://localhost:${PORT}${API_PREFIX}`);
    });
}

startServer();
