import express from "express";
import { subjectController } from "./dependencies/subject.dependencies";

export const subjectRouter = express.Router();

subjectRouter.post("/", subjectController.createSubject.bind(subjectController));
subjectRouter.get("/", subjectController.getAllSubjects.bind(subjectController));
