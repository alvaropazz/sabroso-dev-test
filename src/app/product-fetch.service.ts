import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductFetchService {

  private source = 'https://run.mocky.io/v3/fbedb082-ed1f-4788-bba6-b7e61c1536ed'

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(this.source)
  }
}
