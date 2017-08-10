import { Component, Input } from '@angular/core';
import { CategoriesService } from './categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'delete-category',
  templateUrl: './delete-category.component.html'
})
export class DeleteCategoryComponent { 
  @Input() category;

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastsManager,) { }

  delete() {
    this.categoriesService
      .deletePost(this.category._id)
      .subscribe((res) => {

        if(res) {
          // this.router.navigateByUrl('users/login')
          this.toastr.success('Category deleted!');
        } else {
          // let firstError = Object.keys(res.errors)[0]
          this.toastr.error('Failed to delete category');
        }
    })
  }
}