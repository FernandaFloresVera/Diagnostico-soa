import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";
import { v4 as uuidv4 } from "uuid";

export class CreateSubjectUseCase {
    constructor(readonly subjectRepository: SubjectInterface) { }

    async execute( name: string, major: string, status: boolean ): Promise<SubjectEntity | null> {
        try {
            const id = uuidv4();
            const subject = new SubjectEntity(id, name, major, status);
            return await this.subjectRepository.createSubject(subject);
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
