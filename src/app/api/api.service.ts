import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class ProductsService {
  url: string = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url + "/products")
  }
}
