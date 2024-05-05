import SubjectModel from "../../database/mysql/models/subject.model";
import { SubjectEntity } from "../../entities/subject.entity";
import signale from "signale";
import { SubjectService } from "../subject.service";

export class SubjectImpl implements SubjectService {
    async createSubject(subject: SubjectEntity): Promise<SubjectEntity | null> {
        try {
            const createdSubject = await SubjectModel.create({
                id: subject.id,
                name: subject.name
            });
            return createdSubject;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getAllSubjects(): Promise<SubjectEntity[] | null> {
        try {
            const subjects = await SubjectModel.findAll();

            if (!subjects) {
                return [];
            }
            return subjects;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }
}
