import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
    <div>
        <li *ngFor="let testimonial of testimonials">
        {{testimonial.text}}
        </li>
    </div>
  `
})

export class ListTestimonialsComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getDataApproved()
      .subscribe(data => {
        this.testimonials = data
      })
  }
}
