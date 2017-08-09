import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.http'
import {TestimonialModel} from './testimonialModel'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
      <form (ngSubmit)='submitTestimonial()' #testimonialForm="ngForm>
         <input 
         type="text" 
         id="testimonial"
         placeholder='Write testimonial here..'
         name="testimonial"
         [(ngModel)] = 'testimonial.testimonialText'
         >
        <input type="submit">
        <textarea></textarea>
      </form>

  `
})

export class CreateTestimonialComponent {

  testimonial: TestimonialModel

  constructor(private TestimonialsService: TestimonialsService){
    this.testimonial = new TestimonialModel('')
  }

  submitTestimonial(){
    this.TestimonialsService.create(this.testimonial)
  }

}
