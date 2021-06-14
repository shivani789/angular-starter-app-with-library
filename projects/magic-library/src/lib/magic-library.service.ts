import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MagicLibraryService {

  constructor(private httpClient: HttpClient) { }

  getRatings() {
    console.log("Hi from Service method!");
    
    // return this.httpClient
    // .get('http://localhost:8080/list')
  }
}
