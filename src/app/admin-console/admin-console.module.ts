import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ProductModule } from '../products/products.module';
import { CategoriesModule } from '../categories/categories.module';
import { TestimonialsModule } from '../testimonials/testimonials.module';

import { AdminConsoleComponent } from './admin-console.component';


@NgModule({
  imports: [CommonModule, RouterModule, ProductModule, CategoriesModule, TestimonialsModule],
  declarations: [AdminConsoleComponent],
  providers: [],
  exports: []
})
export class AdminConsoleModule { }