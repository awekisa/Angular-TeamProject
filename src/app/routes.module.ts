import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component'

import {ListTestimonialsComponent} from './testimonials/listTestimonials.component'
import {CreateTestimonialComponent} from './testimonials/createTestimonials.component'
import { ContactsPageComponent } from './core/contacts.component'

import {AboutUsComponent} from './core/about.component'

import { AddProductComponent } from './products/add-product.component'
import { ListProductsComponent } from './products/list-product.component'
import { AdminConsoleComponent } from './admin-console/admin-console.component';

import { PrivateRoute } from './core/private.route'
import { AdminRoute } from './core/admin.route'


const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'testimonials/all', component: ListTestimonialsComponent},
  {path: 'testimonials/add', component: CreateTestimonialComponent},
  {path: 'products/add', component: AddProductComponent, canActivate: [PrivateRoute]},
  {path: 'admin', component: AdminConsoleComponent, canActivate: [AdminRoute]},
   {path: 'about', component: AboutUsComponent},
  {path: 'contacts', component: ContactsPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}
