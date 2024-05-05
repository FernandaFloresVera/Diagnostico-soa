import { SubjectService } from "@src/services/subject.service";
import { Request, Response } from "express";

export class SubjectController {
    constructor(readonly subjectService: SubjectService) { }

    async createSubject(req: Request, res: Response) {
        const subject = req.body;
        const createdSubject = await this.subjectService.createSubject(subject);

        if (!createdSubject) {
            return res.status(400).send("Error creating subject");
        }

        return res.status(201).send(createdSubject);
    }

    async getAllSubjects(req: Request, res: Response) {
        const subjects = await this.subjectService.getAllSubjects();

        if (!subjects) {
            return res.status(400).send("Error fetching subjects");
        }

        return res.status(200).send(subjects);
    }
}
