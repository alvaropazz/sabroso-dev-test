import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFetchService } from '../product-fetch.service';


@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

  public details: object[];
  public total;

  constructor(private route: ActivatedRoute, private service: ProductFetchService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {      
      this.getUserOrder(params.get('id'));
    })
  }

  userOrder;

  getUserOrder(user_id){
    this.service.getDetails(user_id).subscribe((data: {details: string})=>{
      this.details = JSON.parse(data.details);
      this.total = this.details.reduce((acc,p)=>acc+p['checkoutPrice'], 0);
    })
  }

}
