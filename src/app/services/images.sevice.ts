import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpService:HttpClient) { }

  
  //booklist

  imageslist():Observable<any>
  {
    return this.httpService.get(`${environment.API_URL}?client_id=${environment.CLIENT_ID}`);
  }

  
  

}