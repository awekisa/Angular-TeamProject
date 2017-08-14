import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TestimonialsService} from './testimonial.service'
import {TestimonialModel} from '../models/testimonial.model'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
      <form (ngSubmit)='submitTestimonial()' #testimonialForm="ngForm">
        <textarea
         id="testimonial"
         placeholder='Write testimonial here..'
         name="testimonial"
         [(ngModel)] = 'testimonial.text'
        ></textarea><br />
        <input type="submit">
      </form>

  `
})

export class CreateTestimonialComponent {

  testimonial: TestimonialModel

  constructor(
    private TestimonialsService: TestimonialsService,
  private router: Router){
   this.testimonial = new TestimonialModel('')
  }

  submitTestimonial(){
   this.TestimonialsService.create(this.testimonial).subscribe(res => {
      this.router.navigateByUrl('/testimonials/all');
    })
  }

}
