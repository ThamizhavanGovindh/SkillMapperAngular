import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

  
export class EditEmployeeComponent implements OnInit {
  employeemodel: EmployeeModel = new EmployeeModel();

  @Input() employee:EmployeeModel;
  constructor(private employeeService: EmployeeService, private router:Router) {
  }
  ngOnInit() {
  }

  editemployee():void{
    console.log('method invoked');
    this.employeeService.editEmployee(this.employee).subscribe(data=>{alert("Employee Updated Successfully");
  });
  
  }

}
