import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IFiles } from './files';

@Injectable()
export class FileService {

    private _url: string = "http://localhost:5000/"

    constructor(private http: HttpClient){}

    getFiles(): Observable<IFiles[]>{
        return this.http.get<IFiles[]>(this._url)
    }

    uploadFile(fd:FormData){
        return this.http.post(this._url + "single", fd)
    }

}