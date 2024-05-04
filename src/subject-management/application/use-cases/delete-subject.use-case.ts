import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";

export class DeleteSubjectUseCase {
    constructor(readonly subjectRepository: SubjectInterface) { }

    async execute(id: string): Promise<boolean> {
        try {
            return await this.subjectRepository.deleteSubject(id);
        } catch (error) {
            signale.error(error);
            return false;
        }
    }
}
