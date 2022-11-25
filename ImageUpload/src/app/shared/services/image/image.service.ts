import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { artist } from 'src/app/Model/artist.model';
import { studio } from 'src/app/Model/studio.model';
import { user } from 'src/app/Model/user.model';
import { image } from 'src/app/studio/studio-form/studio.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public showHeader: Subject<any>;
  public showHeader$: Observable<any>;

  constructor(private http: HttpClient) {
    this.showHeader = new Subject();
    this.showHeader$ = this.showHeader.asObservable();
  }
  postImageData(data: image[]): Observable<image[]> {
    return this.http.post<image[]>("http://localhost:3000/image", data)
  }

  getImageData(): Observable<image[]> {
    return this.http.get<image[]>("http://localhost:3000/image")
  }

  getStudioData(): Observable<studio[]> {
    return this.http.get<studio[]>("http://localhost:3000/studio")
  }

  getArtistData(): Observable<artist[]> {
    return this.http.get<artist[]>("http://localhost:3000/artist")
  }

  getUserData(): Observable<user[]> {
    return this.http.get<user[]>("http://localhost:3000/user");
  }

  getalluser(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/userType");
  }
}
