import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'

const url = 'localhost:3005/testimonials'

export class TestimonialsService {
    constructor (private http: Http) {}

    getData(){
        return this.http
            .get(url)
            .toPromise()
            .then(data => data.json())
            .catch(err => console.log(err))
    }

    create(testimonial){
        // return this.http
        //     .post(url+'/add')
        //     .toPromise()
        //     .then(resp => resp.json())
        //     .catch(err => console.log(err))
    }
}














