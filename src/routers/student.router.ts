import express from "express";
import { studentController } from "./dependencies/student.dependencies";

export const studentRouter = express.Router();

studentRouter.post("/", studentController.createStudent.bind(studentController));
studentRouter.get("/", studentController.getAllStudents.bind(studentController));
studentRouter.post("/:studentId/subject/:subjectId/add", studentController.assignSubjectToStudent.bind(studentController));
studentRouter.get("/:studentId/subjects", studentController.getSubjectsFromStudent.bind(studentController));
