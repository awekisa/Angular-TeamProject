import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CategoriesService } from './categories.service';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html'
})
export class CategoryTableComponent implements OnInit { 
  categories
  @Output() editCategoryInfo = new EventEmitter<boolean>();
  @Output() deleteCategoryInfo = new EventEmitter<boolean>();

  constructor (private categoriesService: CategoriesService) {}

  ngOnInit () {
    this.categoriesService
      .all()
      .subscribe(res => {
        this.categories = res
      })
  }

  editCategory (category) {
    this.editCategoryInfo.emit(category)
  }

  deleteCategory (category) {
     this.deleteCategoryInfo.emit(category)
  }
}