import { StudentEntity } from "../entities/student.entity";
import { SubjectEntity } from "../entities/subject.entity";

export interface StudentService {
    createStudent(student: StudentEntity): Promise<StudentEntity | null>;
    getAllStudents(): Promise<StudentEntity[] | null>;
    assignSubjectToStudent(studentId: string, subjectId: string): Promise<SubjectEntity[] | null>;
    getSubjectsFromStudent(id: string): Promise<SubjectEntity[] | null>;
    getStudentById(id: string): Promise<StudentEntity | null>;
}
