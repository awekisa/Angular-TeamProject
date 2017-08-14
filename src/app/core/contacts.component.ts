import { Component } from '@angular/core'
import {TestimonialsService} from '../testimonials/testimonial.service'

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsPageComponent {
    testimonialsNumber

    constructor(private testimonialsService: TestimonialsService) {}

    ngOnInit(){
     this.testimonialsService.getDataApproved().subscribe(res => {
           this.testimonialsNumber = res.length
      })
  }
}