import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from '../models/category.model';
import { CategoriesService } from './categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'add-category',
  templateUrl: './category-form.component.html'
})
export class AddCategoryComponent { 
  category = new CategoryModel('');
  @Output() redirectToCategories = new EventEmitter<boolean>();

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastsManager,
    private router: Router) { }

  add() {
    this.categoriesService
      .add(this.category)
      .subscribe((res) => {

        if(res.success) {
          this.redirectToCategories.emit(true);
          this.toastr.success(res.message)
        } else {
          let firstError = Object.keys(res.errors)[0]
          this.toastr.error(res.errors[firstError])
        }
    })
  }
}