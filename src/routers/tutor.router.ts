import express from "express";
import { tutorController } from "./dependencies/tutor.dependencies";

export const tutorRouter = express.Router();

tutorRouter.post("/", tutorController.createTutor.bind(tutorController));
tutorRouter.get("/", tutorController.getAllTutors.bind(tutorController));
tutorRouter.post("/:tutorId/student/:studentId/add", tutorController.assignStudentToTutor.bind(tutorController));
tutorRouter.get("/:tutorId/students", tutorController.getStudentsFromTutor.bind(tutorController));
