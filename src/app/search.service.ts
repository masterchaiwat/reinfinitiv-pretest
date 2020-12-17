import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://api.publicapis.org/categories';

  constructor(private http: HttpClient) { }

  searchSomething(): Observable<any> {
  
   
    return this.http.get<any>(`${this.apiUrl}`)
          .pipe(
          
            catchError((err) => {
              console.log('error caught in service');
              console.error(err);

              //Handle the error here

              return throwError(err);    //Rethrow it back to component
            })
          )
  }
}
