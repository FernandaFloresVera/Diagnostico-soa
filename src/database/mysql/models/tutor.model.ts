import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import StudentModel from "./student.model";

@Table({
    tableName: 'tutors',
    modelName: 'Tutor',
    timestamps: false,
})

export default class TutorModel extends Model {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare firstName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare lastName: string;

    @HasMany(() => StudentModel)
    declare students: StudentModel[];
}
