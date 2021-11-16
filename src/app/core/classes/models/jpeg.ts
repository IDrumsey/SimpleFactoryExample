import { File } from "./file";

export class JPEG extends File {
    constructor(name: string){
        super(name)
        this.ext = "jpg"
    }
}
