import { SubjectController } from "../../controllers/subject.controller";
import { SubjectImpl } from "../../services/impls/subject.impl";

const subjectImpl = new SubjectImpl();

export const subjectController = new SubjectController(subjectImpl);
