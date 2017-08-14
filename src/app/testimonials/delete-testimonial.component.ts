import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestimonialsService } from './testimonial.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'delete-testimonial',
  templateUrl: './delete-testimonial.component.html'
})
export class DeleteTestimonialComponent implements OnInit { 
  @Input() testimonial;
  @Output() redirectToTestimonials = new EventEmitter<boolean>();
  approved: boolean;
  approveButtonName: string;

  constructor(
    private testimonialsService: TestimonialsService,
    private toastr: ToastsManager,) { }

  ngOnInit () {
    this.approved = this.testimonial.approved;
    this.approveButtonName  = this.approved ? 'Disaprove' : 'Approve';
  }

  deleteTestimonial() {
    this.testimonialsService
      .delete(this.testimonial._id, this.testimonial)
      .subscribe((res) => {

        if(res) {
          this.redirectToTestimonials.emit(true);
          this.toastr.success('Testimonial deleted!');
        } else {
          this.toastr.error('Failed to delete testimonial');
        }
    })
  }
}