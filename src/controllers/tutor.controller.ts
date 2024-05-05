import { TutorService } from "@src/services/tutor.service";
import { Request, Response } from "express";

export class TutorController {
    constructor(readonly tutorService: TutorService) { }

    async createTutor(req: Request, res: Response) {
        const tutor = req.body;
        const createdTutor = await this.tutorService.createTutor(tutor);

        if (!createdTutor) {
            return res.status(400).send("Error creating tutor");
        }

        return res.status(201).send(createdTutor);
    }

    async getAllTutors(req: Request, res: Response) {
        const tutors = await this.tutorService.getAllTutors();

        if (!tutors) {
            return res.status(400).send("Error fetching tutors");
        }

        return res.status(200).send(tutors);
    }

    async assignStudentToTutor(req: Request, res: Response) {
        const { tutorId, studentId } = req.params;
        const assignedStudents = await this.tutorService.assignStudentToTutor(tutorId, studentId);

        if (!assignedStudents) {
            return res.status(400).send("Error assigning student to tutor");
        }

        const tutor = await this.tutorService.getTutorById(tutorId);

        if (!tutor) {
            return res.status(400).send("Error fetching tutor");
        }

        return res.status(200).send({ tutor, assignedStudents });
    }

    async getStudentsFromTutor(req: Request, res: Response) {
        const { tutorId } = req.params;
        const students = await this.tutorService.getStudentsFromTutor(tutorId);

        if (!students) {
            return res.status(400).send("Error fetching students from tutor");
        }

        const tutor = await this.tutorService.getTutorById(tutorId);

        if (!tutor) {
            return res.status(400).send("Error fetching tutor");
        }

        return res.status(200).send({ tutor, students });
    }
}
