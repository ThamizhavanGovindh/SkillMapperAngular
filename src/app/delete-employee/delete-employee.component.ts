import { Component, OnInit, Input} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  @Input() employee:EmployeeModel;
  constructor(private employeeService: EmployeeService) {} 
  
  employeeModel: EmployeeModel;  
  ngOnInit() {    
  }
}