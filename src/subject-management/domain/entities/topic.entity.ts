export class TopicEntity {
    public id: string;
    public name: string;
    public status: boolean;
    public subjectId: string;

    constructor(
        name: string,
        status: boolean,
        subjectId: string
    ) {
        this.id = this.generateUuidField();
        this.name = name;
        this.status = status;
        this.subjectId = subjectId;
    }

    generateUuidField(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
