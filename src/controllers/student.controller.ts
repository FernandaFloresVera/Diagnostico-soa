import { StudentService } from "../services/student.service";
import { Request, Response } from "express";

export class StudentController {
    constructor(readonly studentService: StudentService) { }

    async createStudent(req: Request, res: Response) {
        const student = req.body;
        const createdStudent = await this.studentService.createStudent(student);

        if (!createdStudent) {
            return res.status(400).send("Error creating student");
        }

        return res.status(201).send(createdStudent);
    }

    async getAllStudents(req: Request, res: Response) {
        const students = await this.studentService.getAllStudents();

        if (!students) {
            return res.status(400).send("Error fetching students");
        }

        return res.status(200).send(students);
    }

    async assignSubjectToStudent(req: Request, res: Response) {
        const { studentId, subjectId } = req.params;
        const assignedSubjects = await this.studentService.assignSubjectToStudent(studentId, subjectId);

        if (!assignedSubjects) {
            return res.status(400).send("Error assigning subject to student");
        }

        const student = await this.studentService.getStudentById(studentId);

        if (!student) {
            return res.status(400).send("Error fetching student");
        }

        return res.status(200).send({ student, assignedSubjects });
    }

    async getSubjectsFromStudent(req: Request, res: Response) {
        const { studentId } = req.params;
        const subjects = await this.studentService.getSubjectsFromStudent(studentId);

        if (!subjects) {
            return res.status(400).send("Error fetching subjects from student");
        }

        const student = await this.studentService.getStudentById(studentId);

        if (!student) {
            return res.status(400).send("Error fetching student");
        }

        return res.status(200).send({ student, subjects });
    }
}
