import { Component, OnInit } from '@angular/core'
import { Router, NavigationStart, NavigationEnd } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  username = ''
  authenticated = false
  isAdmin = false

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        let token = this.authService.getToken()
        let user = JSON.parse(this.authService.getUser())
        if(token && user) {
          if(user['isAdmin']) {
            this.isAdmin = true
          }
          this.username = user.username
          this.authenticated = true
        } else {
          this.username = ''
          this.authenticated = false
        }
      }
    })
  }

  ngOnInit() {
    let token = this.authService.getToken()
    let user = JSON.parse(this.authService.getUser())
    if(token && user) {
      if(user['isAdmin']) {
            this.isAdmin = true
      }
      this.username = user.username
      this.authenticated = true
    }
  }

  logout() {
    this.authService.deauthenticateUser()
    this.authService.removeUser()
    this.router.navigateByUrl('users/login')
  }

}