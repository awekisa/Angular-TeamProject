import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CreateTestimonialComponent} from './createTestimonials.component'
import {ListTestimonialsComponent} from './listTestimonials.component'
import { EditTestimonialComponent } from './edit-testimonial.component';
import { DeleteTestimonialComponent } from './delete-testimonial.component';
import {TestimonialsService} from './testimonial.service'
import {ListTestimonialsForAdminComponent} from './listTestimonialsForAdmin.component'

@NgModule({
  declarations: [
    CreateTestimonialComponent,
    ListTestimonialsComponent,
    ListTestimonialsForAdminComponent,
    EditTestimonialComponent,
    DeleteTestimonialComponent
  ],
  providers: [TestimonialsService],
  imports: [CommonModule, FormsModule],
  exports: [ListTestimonialsComponent, ListTestimonialsForAdminComponent, EditTestimonialComponent, DeleteTestimonialComponent]
})

export class TestimonialsModule { }