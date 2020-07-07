import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { Product } from '../model';
import {  Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `http://localhost:8080/RESTful-API-using-SpringBoot/api/`

  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + `product/list`)
  }
  create(form:Object) {
    
    return this.http.post<any>(this.url + 'product/add',form)
  }

}
