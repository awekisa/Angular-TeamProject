import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from '../routes.module';
import { FormsModule } from '@angular/forms';

import { CategoriesService } from './categories.service';

import { AddCategoryComponent } from './add-category.component';
import { CategoryTableComponent } from './category-table.component';


@NgModule({
  imports: [CommonModule, RoutesModule, FormsModule],
  declarations: [AddCategoryComponent, CategoryTableComponent],
  providers: [CategoriesService],
  exports: [AddCategoryComponent, CategoryTableComponent]
})
export class CategoriesModule {

}