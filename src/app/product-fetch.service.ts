import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductFetchService {

  private productSource = 'https://run.mocky.io/v3/fbedb082-ed1f-4788-bba6-b7e61c1536ed';
  private orderDestination = 'https://5f65e2ef43662800168e7089.mockapi.io/orders';
  

  constructor(public http: HttpClient) { }

  getProducts() {
    return this.http.get(this.productSource)
  }

  sendOrder(obj) {
    return this.http.post(this.orderDestination, obj)
  }

  getOrders() {
    return this.http.get(this.orderDestination)
  }

  getDetails(id) {
    return this.http.get(this.orderDestination + `/${id}`)
  }
}
