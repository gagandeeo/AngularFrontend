import { Component, OnInit } from '@angular/core';
import { IFiles } from "./files"
import { FileService } from "./file.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  selectedFile = null;
  fileInfos: IFiles[] = [];

  constructor(private _fileService: FileService){}

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(){
    this._fileService.getFiles().subscribe(data => {
      this.fileInfos = data
      console.log("UI18CO59", data)
    })
  }

  onUpload(){

    const fd = new FormData()
    if(this.selectedFile){
      fd.append('files', this.selectedFile)
    }

    this._fileService.uploadFile(fd)
    .subscribe(res=>{
      console.log(res)
      this._fileService.getFiles().subscribe(data => {
      this.fileInfos = data
      })
    })
  }
}
