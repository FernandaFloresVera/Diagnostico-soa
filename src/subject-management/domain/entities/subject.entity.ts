export class SubjectEntity {
    public id: string;
    public name: string;
    public major: string;
    public status: boolean;

    constructor(
        id: string,
        name: string,
        major: string,
        status: boolean
    ) {
        this.id = id;
        this.name = name;
        this.major = major;
        this.status = status;
    }
}
