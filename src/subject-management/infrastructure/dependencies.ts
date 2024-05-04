import { CreateSubjectUseCase } from "@src/subject-management/application/use-cases/create-subject.use-case";
import { MysqlSubjectRepository } from "./repositories/mysql-subject.repository";
import { SubjectController } from "./controllers/subject.controller";
import { GetSubjectUseCase } from "@src/subject-management/application/use-cases/get-subject.use-case";
import { UpdateSubjectUseCase } from "../application/use-cases/update-subject.use-case";
import { DeleteSubjectUseCase } from "../application/use-cases/delete-subject.use-case";
import { GetSubjectsUseCase } from "../application/use-cases/get-subjects.use-case";

const mysqlSubjectRepository = new MysqlSubjectRepository();

const createSubjectUseCase = new CreateSubjectUseCase(mysqlSubjectRepository);
const getSubjectUseCase = new GetSubjectUseCase(mysqlSubjectRepository);
const updateSubjectUseCase = new UpdateSubjectUseCase(mysqlSubjectRepository);
const deleteSubjectUseCase = new DeleteSubjectUseCase(mysqlSubjectRepository);
const getSubjectsUseCase = new GetSubjectsUseCase(mysqlSubjectRepository);

export const subjectController = new SubjectController(createSubjectUseCase, getSubjectUseCase, updateSubjectUseCase, deleteSubjectUseCase, getSubjectsUseCase);
