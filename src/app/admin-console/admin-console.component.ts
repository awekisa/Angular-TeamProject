import { Component } from '@angular/core';

@Component({
  selector: 'admin-console',
  templateUrl: './admin-console.component.html'
})
export class AdminConsoleComponent {
  productAdd: boolean = false;
  productsList: boolean = false;
  categoryAdd: boolean = false;
  categoriesList: boolean = false;
  categoryEdit: boolean = false;
  categoryDelete: boolean = false;
  category;
  testimonialsList: boolean = false;


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
    this.categoryAdd = false;
    this.categoryEdit = false;
    this.categoryDelete = false;
    this.categoriesList = false;
    this.testimonialsList = false; 
  }

  editDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.categoryEdit = true;
    this.category = data;
  }

  deleteDataRecieved (data) {
    this.makeAllPropsFalse ();
    this.categoryDelete = true;
    this.category = data
  }

}