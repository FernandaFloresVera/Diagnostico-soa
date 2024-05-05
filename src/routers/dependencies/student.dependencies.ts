import { StudentController } from "../../controllers/student.controller";
import { StudentImpl } from "../../services/impls/student.impl";

const studentImpl = new StudentImpl();

export const studentController = new StudentController(studentImpl);
