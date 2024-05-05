import { Table, Model, Column, DataType, BelongsTo, BelongsToMany } from "sequelize-typescript";
import SubjectStudentModel from "./subject-student.model";
import StudentModel from "./student.model";

@Table({
    tableName: 'subjects',
    modelName: 'Subject',
    timestamps: false,
})

export default class SubjectModel extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare name: string;

    @BelongsToMany(() => StudentModel, () => SubjectStudentModel)
    declare students: StudentModel[];
}
