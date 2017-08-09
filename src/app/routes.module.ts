import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component'

import {ListTestimonialsComponent} from './testimonials/listTestimonials.component'
import {CreateTestimonialComponent} from './testimonials/createTestimonials.component'

import { AddProductComponent } from './products/add-product.component'
import { ListProductsComponent } from './products/list-product.component'

import { PrivateRoute } from './core/private.route'

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'testimonials', component: ListTestimonialsComponent, 
    children: [
      {path: 'add', component: CreateTestimonialComponent, canActivate: [PrivateRoute]}
    ]
},
  {path: 'products/add', component: AddProductComponent, canActivate: [PrivateRoute]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}
