import { Component, OnInit } from '@angular/core';
import { ProductFetchService } from '../product-fetch.service'

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.css']
})
export class PageShoppingComponent implements OnInit {

  constructor(public ProductFetchService: ProductFetchService) { }

  products;

  ngOnInit(): void {
    this.ProductFetchService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
