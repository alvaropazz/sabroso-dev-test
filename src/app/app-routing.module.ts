import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { PageUserComponent } from './page-user/page-user.component';

const routes: Routes = [
  {path: 'pageShopping', component: PageShoppingComponent},
  {path: 'pageUser', 
  component: PageUserComponent,
  children: [
    {
      path: ':id',
      component: PageDetailsComponent
    }
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
