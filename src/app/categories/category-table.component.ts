import { Component, OnInit } from '@angular/core';

import { CategoriesService } from './categories.service';

@Component({
  selector: 'category-table',
  templateUrl: './category-table.component.html'
})
export class CategoryTableComponent implements OnInit { 
  categories

  constructor (private categoriesService: CategoriesService) {}

  ngOnInit () {
    this.categoriesService
      .all()
      .subscribe(res => {
        this.categories = res
      })
  }
}