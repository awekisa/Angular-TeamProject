import { Component } from '@angular/core';
import {TestimonialsService} from './testimonial.service'

@Component({
  selector: 'testimonialsTable',
  providers: [TestimonialsService],
  template:`
 <table>
  <tr>
  <th>Id</th>
  <th>Approved</th>
  <th>Text</th>
  <th>Full Name</th>
  <th>Company</th>
  <th>Date</th>
  </tr>
   <tr *ngFor="let testimonial of testimonials">
        <td className='hidden-xs'>{{testimonial._id}}</td>
        <td>{{testimonial.approved}}</td>
        <td>{{testimonial.text}}</td>
        <td>{{testimonial.fullName}}</td>
        <td>{{testimonial.company}}</td>
        <td>{{testimonial.date.toLocaleString()}}</td>
        <td>
          <a className='btn btn-default glyphicon glyphicon-edit' name={{testimonial._id}} (onClick)='editTestimonial(testimonial)'></a>
        </td>
        <td>
         
        </td>
    </tr>
</table>
  `
})

export class ListTestimonialsForAdminComponent {
  testimonials

  constructor(private TestimonialsService: TestimonialsService){}

  ngOnInit(){
  this.TestimonialsService.getDataForApproval()
      .subscribe(data => {
        console.log(data)
        this.testimonials = data
      })
  }

  editTestimonial(testimonial){

  }

  deleteTestimonial(testimonial){

  }
}
