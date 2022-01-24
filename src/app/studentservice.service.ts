/*import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Students } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  http:any;
  studentlist: Students[];

  constructor(private _http:HttpClient) { }
  public Getstudents():Observable<any>{
    return this._http.get<any>('assets/students.json');
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface students {
  id:string;
  first_name:string;
  last_name:string;
  email:string;
  gender:string;
  mobile_number:string
}

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http: HttpClient) {}

  getstudents() {
    return this.http.get<any>('assets/students.json')
     .toPromise()
     .then(res => <students[]>res.data)
      .then(data => { return data; });
    }
}
