import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

@Injectable()
export class CategoriesService {
  constructor(private httpService: HttpService) {}

  add (category) {
    return this.httpService.post('categories/add', category, true);
  }

  all () {
    return this.httpService.get(`categories/all`);
  }

  editPost (id, category) {
    return this.httpService.post(`categories/edit/${id}`, category, true);
  }

  deletePost (id) {
    return this.httpService.post(`categories/delete/${id}`, null, true);  
  }
}