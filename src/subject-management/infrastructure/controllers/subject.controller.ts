import { CreateSubjectUseCase } from "@src/subject-management/application/use-cases/create-subject.use-case";
import { DeleteSubjectUseCase } from "@src/subject-management/application/use-cases/delete-subject.use-case";
import { GetSubjectUseCase } from "@src/subject-management/application/use-cases/get-subject.use-case";
import { GetSubjectsUseCase } from "@src/subject-management/application/use-cases/get-subjects.use-case";
import { UpdateSubjectUseCase } from "@src/subject-management/application/use-cases/update-subject.use-case";
import { Request, Response } from "express";
import signale from "signale";


export class SubjectController {
    constructor(readonly createSubjectUseCase: CreateSubjectUseCase, readonly getSubjectUseCase: GetSubjectUseCase,
        readonly updateSubjectUseCase: UpdateSubjectUseCase, readonly deleteSubjectUseCase: DeleteSubjectUseCase,
        readonly getSubjectsUseCase: GetSubjectsUseCase) { }

    async create(req: Request, res: Response) {
        try {
            const subject = await this.createSubjectUseCase.execute(req.body.name, req.body.major, req.body.status);
            if (!subject) return res.status(400).json({ message: 'Subject not created' });
            return res.status(201).json({ mesagge: 'Subject created successfully!', subject });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const subject = await this.getSubjectUseCase.execute(req.params.id);
            if (!subject) return res.status(404).json({ message: 'Subject not found' });
            return res.status(200).json({ message: 'Subject found!', subject });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const subject = await this.updateSubjectUseCase.execute(req.params.id, req.body.name, req.body.major,
                req.body.status);
            if (!subject) return res.status(400).json({ message: 'Subject not updated' });
            return res.status(200).json({ message: 'Subject updated successfully!', subject });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const flag = await this.deleteSubjectUseCase.execute(req.params.id);
            if (!flag) return res.status(400).json({ message: 'Subject not deleted' });
            return res.status(200).json({ message: 'Subject deleted successfully!' });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const subjects = await this.getSubjectsUseCase.execute();
            if (!subjects) return res.status(404).json({ message: 'Subjects not found' });
            return res.status(200).json({ message: 'Subjects found!', subjects });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}
