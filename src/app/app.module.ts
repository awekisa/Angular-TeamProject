import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutesModule} from './routes.module'
import { HttpModule } from '@angular/http';
// import {TestimonialsModule} from './testimonials/testimonials.module'
import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'

import {PageNotFoundComponent} from './pageNotFound.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
