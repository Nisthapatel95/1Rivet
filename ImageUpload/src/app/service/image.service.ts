import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public baseurl: string;

  constructor(private http: HttpClient) { 
    this.baseurl = "http://localhost:3000/";
  }

  
  /**
   * Get list of cimage
   * @returns image
   */
   public getImage(): Observable<Image[]> {
    const url: string = this.baseurl + 'image';
    return this.http.get<Image[]>(url);
  }

  
  /**
   * Delete image
   * @param id get id
   * @returns 
   */
   public deleteImage(id: number): Observable<Image> {
    const url: string = this.baseurl + 'image/' + id;
    return this.http.delete<Image>(url);
  }
}
