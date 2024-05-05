import SubjectModel from "../../database/mysql/models/subject.model";
import StudentModel from "../../database/mysql/models/student.model";
import { StudentEntity } from "../../entities/student.entity";
import { SubjectEntity } from "../../entities/subject.entity";
import { StudentService } from "../student.service";
import signale from "signale";
import SubjectStudentModel from "../../database/mysql/models/subject-student.model";

export class StudentImpl implements StudentService {
    async createStudent(student: StudentEntity): Promise<StudentEntity | null> {
        try {
            const createdStudent = await StudentModel.create({
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName
            });
            return createdStudent;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getAllStudents(): Promise<StudentEntity[] | null> {
        try {
            const students = await StudentModel.findAll();

            if (!students) {
                return [];
            }
            return students;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }

    async assignSubjectToStudent(studentId: string, subjectId: string): Promise<SubjectEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id: studentId } });
            const subject = await SubjectModel.findOne({ where: { id: subjectId } });

            if (!student || !subject) {
                return null;
            }

            await student.$add('subjects', subject);

            const subjectStudents = await this.getSubjectsFromStudent(studentId);

            return subjectStudents;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getSubjectsFromStudent(id: string): Promise<SubjectEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id } });
            if (!student) {
                return null;
            }
            const subjectStudents = await SubjectStudentModel.findAll({ where: { studentId: id } });

            const subjects = await Promise.all(subjectStudents.map(async (subjectStudent) => {
                const subject = await SubjectModel.findOne({ where: { id: subjectStudent.subjectId } });
                return subject;
            }));

            return subjects as SubjectEntity[];
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getStudentById(id: string): Promise<StudentEntity | null> {
        try {
            const student = await StudentModel.findOne({ where: { id } });
            if (!student) {
                return null;
            }
            return student;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
