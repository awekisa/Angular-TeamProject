import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { AddProductComponent } from './add-product.component'
import { ListProductsComponent } from './list-product.component'

import { ProductService } from './product.service'

@NgModule({
  declarations: [AddProductComponent, ListProductsComponent],
  providers: [ProductService],
  imports: [FormsModule, CommonModule]
})
export class ProductModule { }