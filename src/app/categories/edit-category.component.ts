import { Component, Input } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { CategoriesService } from './categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'edit-category',
  templateUrl: './edit-category.component.html'
})
export class EditCategoryComponent { 
  @Input() category;

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastsManager,
) { }


  edit() {
    this.categoriesService
      .editPost(this.category._id, this.category)
      .subscribe((res) => {
        if(res) {
          // this.router.navigateByUrl('users/login')
          this.toastr.success('Category was edited.')
        } else {
          // let firstError = Object.keys(res.errors)[0]
          this.toastr.error('Failed to edit category')
        }
    })
  }
}