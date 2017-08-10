import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'

@Component({
  selector: 'testimonialsTable',
  providers: [TestimonialsService],
  templateUrl: './listTestimonialsForAdmin.component.html'
})

export class ListTestimonialsForAdminComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getDataForApproval()
      .subscribe(data => {
        this.testimonials = data
      })
  }

  editTestimonial(testimonial){
    return testimonial
  }

  deleteTestimonial(testimonial){
    return testimonial
  }
}
