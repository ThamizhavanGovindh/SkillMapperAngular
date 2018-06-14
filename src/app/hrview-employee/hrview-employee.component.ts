import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';
import {Router} from '@angular/router';
import {SkillModel} from '../SkillModel';
@Component({
  selector: 'app-hrview-employee',
  templateUrl: './hrview-employee.component.html',
  styleUrls: ['./hrview-employee.component.css']
})
export class HRViewEmployeeComponent implements OnInit {

  skillModel: SkillModel = new SkillModel();
  employeeModel: EmployeeModel = new EmployeeModel();
  skillmod: SkillModel;
  employeemodel: EmployeeModel[];
  skillmodel: SkillModel[];
  constructor(private employeeService: EmployeeService, private router:Router) { }



  ngOnInit() {
    this.ViewEmployee();
  }
  ViewEmployee():void{
    this.employeeService.viewEmployeeapproved().subscribe(data=>this.skillmodel=data);
    console.log('data retrived');
  }

}
