import { File } from "./file"

export class PNG extends File {
    constructor(name: string){
        super(name)
        this.ext = "png"
    }
}
