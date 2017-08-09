import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class ProductService {

  constructor(private httpService: HttpService) {}

  create(product) {
    return this.httpService.post('products/add', product)
  }

  getAll() {
    return this.httpService.get('products/all')
  }

}