import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageDetailsComponent } from './page-details/page-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageShoppingComponent,
    PageUserComponent,
    PageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
