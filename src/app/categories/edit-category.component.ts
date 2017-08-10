import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../models/category.model';
import { CategoriesService } from './categories.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'edit-category',
  templateUrl: './category-form.component.html'
})
export class EditCategoryComponent implements OnInit { 
  category = new CategoryModel('')
  id: string

  constructor(
    private categoriesService: CategoriesService,
    private toastr: ToastsManager,
    private router: Router,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
     }

  ngOnInit () {
    this.categoriesService
      .editGet(this.id)
      .subscribe(res => {
        console.log(res)
      })
  }

  edit() {
    this.categoriesService
      .editPost(this.id, this.category)
      .subscribe((res) => {

        if(res.success) {
          // this.router.navigateByUrl('users/login')
          this.toastr.success(res.message)
        } else {
          let firstError = Object.keys(res.errors)[0]
          this.toastr.error(res.errors[firstError])
        }
    })
  }
}