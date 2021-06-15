import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MagicLibraryService {

  constructor(private httpClient: HttpClient) { }

  getRatings() {    
    return this.httpClient
    .get('http://localhost:8080/read')
    .toPromise()
    .then(res => { 
      console.log(res);
      return res; 
    })
  }
}
