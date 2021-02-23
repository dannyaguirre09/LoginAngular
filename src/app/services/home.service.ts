import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { controlZoneReponse } from '../models/controlZone-reponse'
import { Observable, BehaviorSubject } from 'rxjs'; 

@Injectable()
export class HomeService {
  SERVER: string = 'http://34.123.99.236:8080';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }
  
  getData(): Observable<controlZoneReponse> {
    var ruta = `${this.SERVER}/api/admin/zoneAdminController/getControlZoneDtoList`;   
    const httpOptions = {
      headers: new HttpHeaders({        
        'Authorization': 'Bearer '+ localStorage.getItem('access_token') ,
        'Content-Type':  'application/x-www-form-urlencoded',
        
      })
    };

    return this.httpClient.get<controlZoneReponse>(ruta, httpOptions);          
  }

}
