import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";

export class UpdateSubjectUseCase {
    constructor(readonly subjectRepository: SubjectInterface) { }

    async execute(id: string, name: string, major: string, status: boolean): Promise<SubjectEntity | null> {
        try {
            const subject = new SubjectEntity(id, name, major, status);
            return await this.subjectRepository.updateSubject(subject);
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
