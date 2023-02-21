export class Mark {
    id: Number | null;
    mark: Number | null;

    constructor(id?: Number, mark?: Number) {
        this.id = id || null;
        this.mark = mark || null;
    }
}