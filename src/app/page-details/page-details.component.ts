import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFetchService } from '../product-fetch.service';


@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {

  public user_id

  constructor(private route: ActivatedRoute, private service: ProductFetchService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.user_id = params.get('id');
      this.getUserOrder(this.user_id);
    })
  }

  userOrder;

  getUserOrder(user_id){
    this.service.getDetails(user_id).subscribe(data=>{
      this.userOrder = data;
    })
  }

}
