import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";

export class GetSubjectUseCase {
    constructor(readonly subjectRepository: SubjectInterface) { }

    async execute(id: string): Promise<SubjectEntity | null> {
        try {
            return await this.subjectRepository.getSubject(id);
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
