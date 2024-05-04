import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";

export class GetSubjectsUseCase {
    constructor(readonly subjectRepository: SubjectInterface) { }

    async execute(): Promise<SubjectEntity[] | null>{
        try {
            return await this.subjectRepository.getSubjects();
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
