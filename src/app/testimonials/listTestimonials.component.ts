import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.http'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
    <ul>
        <li *ngFor="testimonial of testimonials">
        {{testimonial.newTestimonial}}
        </li>
    </ul>
  `
})

export class ListTestimonialsComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
    this.testimonials = this.TestimonialsService.getData()
  }
}
