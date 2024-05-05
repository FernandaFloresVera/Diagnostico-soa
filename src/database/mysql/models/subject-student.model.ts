import { Column, DataType, ForeignKey, Model, Sequelize, Table } from "sequelize-typescript";
import SubjectModel from "./subject.model";
import StudentModel from "./student.model";

@Table({
    tableName: 'subject-students',
    modelName: 'SubjectStudent',
    timestamps: false,
})

export default class SubjectStudentModel extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @ForeignKey(() => SubjectModel)
    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare subjectId: string;

    @ForeignKey(() => StudentModel)
    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare studentId: string;
}
