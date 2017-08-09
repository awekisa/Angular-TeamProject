import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TestimonialsService {
    constructor (private http: HttpService) {}

    getData(){
        return this.http
            .get('testimonials/all-approved')
    }

    create(testimonial){
        return this.http
            .post('testimonials/add', testimonial)
    }
}














