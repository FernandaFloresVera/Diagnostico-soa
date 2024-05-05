export class SubjectStudentEntity {
    public id: string;
    public subjectId: string;
    public studentId: string;

    constructor(
        id: string,
        subjectId: string,
        studentId: string
    ) {
        this.id = id;
        this.subjectId = subjectId;
        this.studentId = studentId;
    }
}
