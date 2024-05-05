import { SubjectEntity } from "../entities/subject.entity";

export interface SubjectService {
    createSubject(subject: SubjectEntity): Promise<SubjectEntity | null>;
    getAllSubjects(): Promise<SubjectEntity[] | null>;
}
