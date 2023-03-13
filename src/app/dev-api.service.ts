import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devs } from './devs';

@Injectable({
  providedIn: 'root'
})
export class DevAPIService {
  url:string ="https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http:HttpClient){

}
getDevs():Observable<devs>{
  return this.http.get<devs>(this.url);
}
}