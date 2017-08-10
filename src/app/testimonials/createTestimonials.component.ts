import { Component } from '@angular/core';
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
        ></textarea>
        <input type="submit">
      </form>

  `
})

export class CreateTestimonialComponent {

  testimonial: TestimonialModel

  constructor(private TestimonialsService: TestimonialsService){
   this.testimonial = new TestimonialModel('')
  }

  submitTestimonial(){
    console.log(this.testimonial)
   this.TestimonialsService.create(this.testimonial).subscribe(res => {
      console.log(res)
    })
  }

}
