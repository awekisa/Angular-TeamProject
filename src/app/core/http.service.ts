import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { AuthService } from './auth.service'

import 'rxjs/add/operator/map'

const baseUrl = 'http://localhost:3005/'

@Injectable()
export class HttpService {
  constructor(private http: Http, private authService: AuthService) {}

  post(url, data) {

    const headers = new Headers({
      'Content-type' : 'application/json'
    })

    headers.append('Authorization', `beared ${this.authService.getToken()}`)

    const requestOptions = new RequestOptions({
      headers: headers
    })

    return this.http
      .post(`${baseUrl}${url}`, data, requestOptions)
      .map(res => res.json())
  }

  get(url) {
    return this.http
      .get(`${baseUrl}${url}`)
      .map(res => res.json())
  }
}