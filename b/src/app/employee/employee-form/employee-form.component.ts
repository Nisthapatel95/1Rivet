import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent implements OnInit {

  id:any

  constructor( private route: Router,private activated:ActivatedRoute) { }

  ngOnInit(): void {
  }
getpage(){
  this.route.navigate(['employee'])
}

}
