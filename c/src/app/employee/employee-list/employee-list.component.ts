import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {

  public employee: any=[]

  constructor( private activateroute:ActivatedRoute) { 
    this.employee =[{
      id:1,
      name:'nistha',
      email: 'nistha@o5gmail.com'

    },
    {
      id:2,
      name:'yag',
      email: 'yag@o5gmail.com'

    }]
  }

  ngOnInit(): void {
  }

}
