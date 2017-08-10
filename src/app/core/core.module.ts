import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'
import { PrivateRoute } from './private.route'
import { AdminRoute } from './admin.route'

import { NavbarComponent } from './navbar.component'
import { ContactsPageComponent } from './contacts.component'

@NgModule({
  declarations: [NavbarComponent, ContactsPageComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [HttpService, AuthService, PrivateRoute, AdminRoute],
  exports: [NavbarComponent, ContactsPageComponent]
})

export class CoreModule {}