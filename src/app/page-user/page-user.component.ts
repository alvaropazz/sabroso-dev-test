import { Component, OnInit } from '@angular/core';
import { ProductFetchService } from '../product-fetch.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  constructor(public ProductFetchService: ProductFetchService) { }

  orders;
  
  ngOnInit(): void {
    this.ProductFetchService.getOrders().subscribe((data)=>{
    this.orders = data
  })
  }
}
