import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private url: string = environment.api;

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/api/products');
  }
}
