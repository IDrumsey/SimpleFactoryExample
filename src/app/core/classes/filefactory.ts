import { File } from "./models/file";
import { JPEG } from "./models/jpeg";
import { PNG } from "./models/png";

// https://refactoring.guru/design-patterns/factory-comparison

export class FileFactory {
    newFile(fileName: string, fileType: 'jpg' | 'png'): File {
        if(fileName.length == 0){
            throw 'filename cannot be empty'
        }
        switch(fileType){
            case 'jpg': {
                return new JPEG(fileName)
            }
            case 'png': {
                return new PNG(fileName)
            }
        }
    }
}
