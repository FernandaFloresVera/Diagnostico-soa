import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";
import SubjectModel from "../mysql/models/subject.model";

export class MysqlSubjectRepository implements SubjectInterface {
    async createSubject(subject: SubjectEntity): Promise<SubjectEntity | null> {
        try {
            const savedUser = await SubjectModel.create({
                id: subject.id,
                name: subject.name,
                major: subject.major,
                status: subject.status
            });
            return savedUser;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getSubject(id: string): Promise<SubjectEntity | null> {
        try {
            const subject = await this.findById(id);
            if (subject) {
                return subject;
            }
            return null;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async updateSubject(subject: SubjectEntity): Promise<SubjectEntity | null> {
        const foundSubject = await this.findById(subject.id);
        if (foundSubject !== null) {
            SubjectModel.update(subject, { where: { id: subject.id } });
            return subject;
        }
        return null;
    }

    async deleteSubject(id: string): Promise<boolean> {
        const foundSubject = await this.findById(id);
        if (foundSubject !== null) {
            SubjectModel.destroy({ where: { id: id } });
            return true;
        }
        return false;
    }

    async getSubjects(): Promise<SubjectEntity[] | null> {
        const subjects = await SubjectModel.findAll();
        if (subjects) {
            return subjects;
        }
        return null;
    }

    async findById(id: string): Promise<SubjectEntity | null> {
        const subject = SubjectModel.findOne({ where: { id } });
        if (subject) {
            return subject;
        }
        return null;
    }
}
