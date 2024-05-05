import { StudentEntity } from "../../entities/student.entity";
import { TutorEntity } from "../../entities/tutor.entity";
import { TutorService } from "../tutor.service";
import TutorModel from "../../database/mysql/models/tutor.model";
import signale from "signale";
import StudentModel from "../../database/mysql/models/student.model";

export class TutorImpl implements TutorService {
    async createTutor(tutor: TutorEntity): Promise<TutorEntity | null> {
        try {
            const createdTutor = await TutorModel.create({
                id: tutor.id,
                firstName: tutor.firstName,
                lastName: tutor.lastName,
            });
            return createdTutor;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getAllTutors(): Promise<TutorEntity[] | null> {
        try {
            const tutors = await TutorModel.findAll();
            if (!tutors) {
                return [];
            }
            return tutors;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }

    async assignStudentToTutor(tutorId: string, studentId: string): Promise<StudentEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id: studentId } });
            const tutor = await TutorModel.findOne({ where: { id: tutorId } });

            if (!student || !tutor) {
                return null;
            }

            await tutor.$add('students', student);

            const tutorStudents = await this.getStudentsFromTutor(tutorId);

            return tutorStudents;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getStudentsFromTutor(id: string): Promise<StudentEntity[] | null> {
        try {
            const tutor = await TutorModel.findOne({ where: { id } });
            if (!tutor) {
                return null;
            }
            const students = await StudentModel.findAll({ where: { tutorId: id } });
            return students;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getTutorById(id: string): Promise<TutorEntity | null> {
        try {
            const tutor = await TutorModel.findOne({ where: { id } });
            if (!tutor) {
                return null;
            }
            return tutor;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
