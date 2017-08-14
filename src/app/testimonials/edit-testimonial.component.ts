import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestimonialModel } from '../models/testimonial.model';
import { TestimonialsService } from './testimonial.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'edit-testimonial',
  templateUrl: './edit-testimonial.component.html'
})
export class EditTestimonialComponent implements OnInit {
  @Input() testimonial;
  @Output() redirectToTestimonials = new EventEmitter<boolean>();
  approved: boolean;
  approveButtonName: string;

  constructor (
    private testimonialsService: TestimonialsService,
    private toastr: ToastsManager,
  ) { }

  ngOnInit () {
    this.approved = this.testimonial.approved;
    this.approveButtonName  = this.approved ? 'Disaprove' : 'Approve';
  }

  editTestimonial() {
    this.testimonialsService
      .edit(this.testimonial, this.testimonial._id)
      .subscribe((res) => {
        if(res) {
          this.redirectToTestimonials.emit(true);
          this.toastr.success('Testimonial was edited.')
        } else {
          this.toastr.error('Failed to edit testimonial')
        }
    })
  }

  changeStatus () {
    this.approved = !this.approved;
    this.approveButtonName = this.approved ? 'Disaprove' : 'Approve';
    this.testimonial.approved = this.approved;
  }
}