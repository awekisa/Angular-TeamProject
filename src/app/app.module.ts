import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutesModule} from './routes.module'
import { HttpModule } from '@angular/http';
import {TestimonialsModule} from './testimonials/testimonials.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpModule,
    TestimonialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
