import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TestimonialsService {
    constructor (private http: HttpService) {}

    getDataApproved(){
        return this.http
            .get('testimonials/all-approved')
    }

    getDataForApproval(){
        return this.http
            .get('testimonials/all')
    }

    create(testimonial){
        return this.http
            .post('testimonials/add', testimonial, true)
    }

    edit (testimonial, testimonialId){
        return this.http.post(`testimonials/edit/${testimonialId}`, testimonial, true)
    }

    delete (testimonial, testimonialId){
        return this.http.post(`testimonials/delete/${testimonialId}`,testimonial, true)
    }
}














