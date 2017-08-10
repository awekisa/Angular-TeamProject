import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'
import {TestimonialModel} from '../models/testimonial.model'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
      <form (ngSubmit)='editTestimonial()' #testimonialForm="ngForm">
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

export class EditTestimonialComponent {
  testimonial: TestimonialModel
  testimonialId

  constructor(
      private route: ActivatedRoute,
      private TestimonialsService: TestimonialsService
      ){
     this.testimonialId = this.route.snapshot.paramMap.get('id');
  }
  
  ngOnInit(){
      //Тук трябва да напиша логика за взимане на индивидуален тестимониал, която не съществува на сървъра
  }

  editTestimonial(){
   this.TestimonialsService.edit(this.testimonial, this.testimonialId).subscribe(res => {
      console.log(res)
    })
  }

}
