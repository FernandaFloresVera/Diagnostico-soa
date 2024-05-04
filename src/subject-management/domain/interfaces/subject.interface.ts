import { SubjectEntity } from "../entities/subject.entity";

export interface SubjectInterface {
    createSubject(subject: SubjectEntity): Promise<SubjectEntity | null >;
    getSubject(id: string): Promise<SubjectEntity | null>;
    updateSubject(subject: SubjectEntity): Promise<SubjectEntity | null>;
    deleteSubject(id: string): Promise<boolean>;
    getSubjects(): Promise<SubjectEntity[] | null>;
}
