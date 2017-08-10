import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'
import {TestimonialModel} from '../models/testimonial.model'
import {ActivatedRoute} from '@angular/router'
import {ListTestimonialsForAdminComponent} from './listTestimonialsForAdmin.component'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
      <form (ngSubmit)='deleteTestimonial()' #testimonialForm="ngForm">
        <textarea
         id="testimonial"
         placeholder='testimonial.text'
         name="testimonial"
         [(ngModel)] = 'testimonial.text'
        ></textarea>
        <input type="submit">
      </form>

  `
})

export class DeleteTestimonialComponent {
  testimonial: TestimonialModel
  testimonialId

  constructor(
      private route: ActivatedRoute,
      private TestimonialsService: TestimonialsService
      ){
     this.testimonialId = this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit(){
      
  }

  deleteTestimonial(){
   this.TestimonialsService.delete(this.testimonial, this.testimonialId).subscribe(res => {
      console.log(res)
    })
  }

}
