import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { UserService } from './user.service'

import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [UserService],
  imports: [FormsModule]
})
export class UsersModule {}