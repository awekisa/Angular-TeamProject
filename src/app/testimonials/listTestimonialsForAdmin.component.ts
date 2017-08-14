import { Component, Output, EventEmitter } from '@angular/core';
import { TestimonialsService } from './testimonial.service';

@Component({
  selector: 'testimonialsTable',
  templateUrl: './listTestimonialsForAdmin.component.html'
})

export class ListTestimonialsForAdminComponent {
  testimonials
  @Output() editTestimonialInfo = new EventEmitter<boolean>();
  @Output() deleteTestimonialInfo = new EventEmitter<boolean>();

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getDataForApproval()
      .subscribe(data => {
        this.testimonials = data;
      })
  }

  editTestimonial(testimonial){
    this.editTestimonialInfo.emit(testimonial);
  }

  deleteTestimonial(testimonial){
    this.deleteTestimonialInfo.emit(testimonial);
  }
}
