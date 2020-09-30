import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '9e98f86b6c35e2b3a50d7cdcf47cac37';
  /*q={city name} */
  /*{API key} */
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
