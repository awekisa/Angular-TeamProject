import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common'
// Component imports…
import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'

import {PageNotFoundComponent} from './pageNotFound.component'
import {ListTestimonialsComponent} from './testimonials/listTestimonials.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
//   { path: 'testimonials', component: ListTestimonialsComponent
//     //   children: [
// //     {path: 'pesho', component: PeshoComponent},
// //     {path: 'gosho', component: GoshoComponent}
// //     ] 
// },
  { path: '**', component: PageNotFoundComponent }
];

//COMMENT TEST

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes), 
    FormsModule,
    CommonModule
   ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
