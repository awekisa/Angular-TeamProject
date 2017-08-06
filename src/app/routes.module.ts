import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component imports…
import {HomeComponent} from './home.component'
import {AboutComponent} from './about.component'
import {PageNotFoundComponent} from './pageNotFound.component'

const routes: Routes = [
  { path: '', component: HomeComponent,
//   children: [
//     {path: 'pesho', component: PeshoComponent},
//     {path: 'gosho', component: GoshoComponent}
//     ] 
},
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule { }
