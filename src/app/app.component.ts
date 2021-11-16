import { Component } from '@angular/core';
import { FileFactory } from './core/classes/filefactory';
import { File } from './core/classes/models/file';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileFactory = new FileFactory()

  typeToMake: 'jpg' | 'png' = 'jpg'
  newFileName: string = ""

  createdFiles: File[] = []

  onNewFileBtnClick(): void {
    try {
      let newFile = this.fileFactory.newFile(this.newFileName, this.typeToMake)
      console.log(newFile)
      this.createdFiles.push(newFile)
    }
    catch (error) {
      alert(error)
    }
  }
}
