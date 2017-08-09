import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

import 'rxjs/add/operator/map'

const baseUrl = 'http://localhost:3005/'

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  post(url, data) {

    const headers = new Headers({
      'Content-type' : 'application/json'
    })

    const requestOptions = new RequestOptions({
      headers: headers
    })

    return this.http
      .post(`${baseUrl}${url}`, data, requestOptions)
      .map(res => res.json())
  }
}