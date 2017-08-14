import { Component } from '@angular/core';

@Component({
  selector: 'admin-console',
  templateUrl: './admin-console.component.html'
})
export class AdminConsoleComponent {
  productAdd: boolean = false;
  productsList: boolean = false;
  productEdit: boolean = false;
  productDelete: boolean = false;
  product;
  categoryAdd: boolean = false;
  categoriesList: boolean = false;
  categoryEdit: boolean = false;
  categoryDelete: boolean = false;
  category;
  testimonialsList: boolean = false;
  testimonialEdit: boolean = false;
  testimonialDelete: boolean = false;
  testimonial;


  clickProductAdd () {
    this.makeAllPropsFalse();
    this.productAdd = true;
  }

  clickProductsList () {
    this.makeAllPropsFalse();
    this.productsList = true;
  }

  clickCategoryAdd () {
    this.makeAllPropsFalse();
    this.categoryAdd = true;  
  }

  clickCategoriesList () {
    this.makeAllPropsFalse(); 
    this.categoriesList = true;
    
  }

  clickTestimonialsList () {
    this.makeAllPropsFalse();
    this.testimonialsList = true; 
  }

  makeAllPropsFalse () {
    this.productAdd = false;
    this.productsList = false;
    this.productEdit = false;
    this.productDelete = false;
    this.categoryAdd = false;
    this.categoryEdit = false;
    this.categoryDelete = false;
    this.categoriesList = false;
    this.testimonialsList = false; 
    this.testimonialEdit = false;
    this.testimonialDelete = false;
  }

    editProductDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.productEdit = true;
    this.product = data;
  }

  deleteProductDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.productDelete = true;
    this.product = data
  }

  editCategoryDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.categoryEdit = true;
    this.category = data;
  }

  deleteCategoryDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.categoryDelete = true;
    this.category = data
  }

  editTestimonialDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.testimonialEdit = true;
    this.testimonial = data
  }

  deleteTestimonialDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.testimonialDelete = true;
    this.testimonial = data
  }  
}