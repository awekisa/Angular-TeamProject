import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from '../routes.module';
import { FormsModule } from '@angular/forms';

import { CategoriesService } from './categories.service';

import { AddCategoryComponent } from './add-category.component';
import { CategoryTableComponent } from './category-table.component';
import { EditCategoryComponent } from './edit-category.component';
import { DeleteCategoryComponent } from './delete-category.component';


@NgModule({
  imports: [CommonModule, RoutesModule, FormsModule],
  declarations: [
    AddCategoryComponent,
    CategoryTableComponent,
    EditCategoryComponent,
    DeleteCategoryComponent],
  providers: [CategoriesService,
  ],
  exports: [
    AddCategoryComponent,
    CategoryTableComponent,
    EditCategoryComponent,
    DeleteCategoryComponent]
})
export class CategoriesModule {

}