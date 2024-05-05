import { StudentEntity } from "../entities/student.entity";
import { TutorEntity } from "../entities/tutor.entity";

export interface TutorService {
    createTutor(tutor: TutorEntity): Promise<TutorEntity | null>;
    getAllTutors(): Promise<TutorEntity[] | null>;
    assignStudentToTutor(tutorId: string, studentId: string): Promise<StudentEntity[] | null>;
    getStudentsFromTutor(id: string): Promise<StudentEntity[] | null>;
    getTutorById(id: string): Promise<TutorEntity | null>;
}
