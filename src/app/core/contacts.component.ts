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
      //TODO: Change getDataForApproval with getDataApproved when we have approved testimonials by admin
    //  this.testimonialsService.getDataForApproval().subscribe(res => {
    //        this.testimonialsNumber = res.length
    //     } )
  }
}