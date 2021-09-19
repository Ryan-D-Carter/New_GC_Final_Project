import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListBySearchTerm } from '../Models/ListBySearchTerm';
import { MetObject } from '../Models/MetObject';

@Injectable({
  providedIn: 'root'
})
export class MetApiService {

  apiUri: string ="https://localhost:44375/api/met"; //base URL needed

  constructor(private http: HttpClient) { }

   // READ get the list of objects by medium
   getObjectListBySearchTerm(searchTerm: string) {
    return this.http.get<ListBySearchTerm>(`${this.apiUri}/GetObjByMedium/${searchTerm}`)
   }

  //READ get the object details by Id
  getObjectById(objectId: number) {
   return this.http.get<MetObject>(`${this.apiUri}/getObjById/${objectId}`);
  }
}
