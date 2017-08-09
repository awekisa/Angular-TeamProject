import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from '../routes.module';
import { FormsModule } from '@angular/forms';

import { CategoriesService } from './categories.service';


@NgModule({
  imports: [CommonModule, RoutesModule, FormsModule],
  declarations: [],
  providers: [CategoriesService],
  exports: []
})
export class CarsModule {

}