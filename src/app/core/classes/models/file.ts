export abstract class File {
    name: string
    timeCreated: Date
    ext: string

    constructor(name: string) {
        this.name = name
        this.timeCreated = new Date()
    }

    getFullName(): string {
        return `${this.name}.${this.ext}`
    }
}
