import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'

@Component({
  selector: '',
  providers: [TestimonialsService],
  template:`
    <ul>
        <li *ngFor="let testimonial of testimonials">
        {{testimonial.text}}
        </li>
    </ul>
  `
})

export class ListTestimonialsComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getData()
      .subscribe(data => {
        console.log(data)
        this.testimonials = data
      })
  }
}
