import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
    <div class='testimonial-section'>
            <div class='testimonial-container' *ngFor="let testimonial of testimonials">
              <br/>
              <p class='testimonial-text'>{{testimonial.text}}</p>  
              <p class='testimonial-fullName'> -- By {{testimonial.fullName}} from {{testimonial.company}}</p>
              <p class='testimonial-date' >Written on {{testimonial.date}}</p>
            </div>    
    </div>
  `
})

export class ListTestimonialsComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getDataApproved()
      .subscribe(data => {
        console.log(data)
        this.testimonials = data
      })
  }
}
