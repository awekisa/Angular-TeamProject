import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { AuthService } from './auth.service'

import 'rxjs/add/operator/map'

const baseUrl = 'http://localhost:3005/'

@Injectable()
export class HttpService {
  constructor(private http: Http, private authService: AuthService) {}

  post(url, data, auth) {

    const headers = new Headers({
      'Content-type' : 'application/json'
    })

    if(auth) {
      let token = this.authService.getToken()
      headers.append('Authorization', `Bearer ${token}`)
    }

    const requestOptions = new RequestOptions({
      headers: headers
    })

    return this.http
      .post(`${baseUrl}${url}`, data, requestOptions)
      .map(res => res.json())
  }

  get(url) {

 const headers = new Headers({
      'Content-type' : 'application/json'
    })
   
    if(this.authService.isUserAuthenticated()) {
      let token = this.authService.getToken()
      headers.append('Authorization', `Bearer ${token}`)
    }

    const requestOptions = new RequestOptions({
      headers: headers
    })

    console.log(requestOptions)

    return this.http
      .get(`${baseUrl}${url}`, requestOptions)
      .map(res => res.json())
  }
}