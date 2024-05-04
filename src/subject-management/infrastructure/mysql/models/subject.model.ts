import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface SubjectAttributes {
    id: string;
    name: string;
    major: string;
    status: boolean;
}

@Table({
    tableName: 'subjects',
    modelName: 'Subject',
    timestamps: false,
})

export default class SubjectModel extends Model implements SubjectAttributes {
    @Column({
        primaryKey: true,
        type: DataType.STRING,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare major: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    declare status: boolean;
}
