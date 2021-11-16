import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../classes/models/file';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() file: File
}
