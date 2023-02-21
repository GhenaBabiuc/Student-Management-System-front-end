import { Mark } from "./mark.model";

export class Discipline {
    id: Number | null;
    name: String | null;
    marks: Mark[] = [];
    avg: Number | null;

    constructor(id?: Number, name?: String, marks?: Mark[], avg?: Number) {
        this.id = id || null;
        this.name = name || null;
        if (marks) {
            this.marks = marks;
        }
        this.avg = avg || null;
    }
}