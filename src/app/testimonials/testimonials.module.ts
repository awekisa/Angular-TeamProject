import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CreateTestimonialComponent} from './createTestimonials.component'
import {ListTestimonialsComponent} from './listTestimonials.component'

@NgModule({
  declarations: [
    CreateTestimonialComponent,
    ListTestimonialsComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CreateTestimonialComponent,
    ListTestimonialsComponent
  ]
})

export class TestimonialsModule { }