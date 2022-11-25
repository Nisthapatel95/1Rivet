import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  postRegisterData(data: any) {
    const url = this.baseurl + "register"
    return this.http.post(url, data)
  }

  getStateData() {
    const url = this.baseurl + "State"
    return this.http.get(url)
  }

  getCityData() {
    const url = this.baseurl + "Cities"
    return this.http.get(url)
  }

  getjsonData(pageNumber:number, pageSize:number) {
    const url = this.baseurl + "posts"
    return this.http.get(`${url}?_page=${pageNumber}&_limit=${pageSize}`)
    
  }






}
