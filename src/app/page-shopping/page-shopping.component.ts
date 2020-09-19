import { Component, OnInit } from '@angular/core';
import { ProductFetchService } from '../product-fetch.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.css']
})
export class PageShoppingComponent implements OnInit {

  constructor(public ProductFetchService: ProductFetchService) { }

  productTotal = 0;
  value = 0;
  IVA = 1.12;
  subtotal = 0;

  handleMinus(i) {  
    let q = this.products[i].quantity - 1;    
    if (q < 0)
      return;
    
    this.products[i].quantity = q;  
    this.calculate(i); 
  }

  handlePlus(i) {
    this.products[i].quantity +=1;       
    this.calculate(i); 
  }

  private calculate(i){    
    this.products[i].checkoutPrice = Number((this.products[i].price * this.products[i].quantity).toFixed(2));

    this.productTotal = Number(this.products.reduce((acc,p)=>acc + p.checkoutPrice * this.IVA,0).toFixed(2));

    this.subtotal = Number(this.products.reduce((acc,p)=>acc + p.checkoutPrice,0).toFixed(2));
  }

  products;

  ngOnInit(): void {
    this.ProductFetchService.getProducts().subscribe((data: object[]) => {
      this.products = data.map(x=>({...x, quantity:0, checkoutPrice:0}))
    })
  }

  sendOrder() {
    const req = {
      id: uuidv4(),
      user_id: uuidv4(),
      details: JSON.stringify(this.products.filter(p=>p.quantity > 0).map(p=>({quantity: p.quantity, name:p.name, checkoutPrice: p.checkoutPrice}))),
      subtotal: Number((this.productTotal/this.IVA).toFixed(2)),
      total: this.productTotal,
    };
    
    this.ProductFetchService.sendOrder(req).subscribe({
      next: (data) => {
        alert('Enviado!')
      }
    })
  }

  order;

  getOrder() {
    this.ProductFetchService.getOrders().subscribe((data)=>{
      this.order = data
    })
  }
}
