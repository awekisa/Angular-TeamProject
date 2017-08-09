import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'

@Injectable()
export class CategoriesService {
  constructor(private httpService: HttpService) {}

  add (category) {
    return this.httpService.post('categories/add', category);
  }

  all () {
    return this.httpService.get(`categories/all`);
  }

  editGet (id) {
    return this.httpService.get(`categories/edit/${id}`);
  }

  editPost (id, category) {
    return this.httpService.post(`categories/edit/${id}`, category);
  }

  deleteGet (id) {
    return this.httpService.get(`categories/delete/${id}`);  
  }

  deletePost (id) {
    return this.httpService.post(`categories/delete/${id}`, null);  
  }
}