import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';
import {Router} from '@angular/router';
import {SkillModel} from '../SkillModel';

@Component({
  selector: 'app-skill-registration',
  templateUrl: './skill-registration.component.html',
  styleUrls: ['./skill-registration.component.css']
})
export class SkillRegistrationComponent implements OnInit {

  skillModel: SkillModel = new SkillModel();
  employeeModel: EmployeeModel = new EmployeeModel();
  employeemod: EmployeeModel;
  employeemodel: EmployeeModel[];
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
    this.ViewEmployee();
  }
  ViewEmployee():void{
     this.employeeService.getEmployee().subscribe(data=>this.employeemodel=data);
    console.log('data retrived');
    
  }
  skillRegister(employee: EmployeeModel): void{  
     this.employeemod = employee;
    // this.skillModel.empMaster = this.employeeModel;    
    // this.employeeService.skillReg(this.skillModel).subscribe(data=>{alert("Employee Registered Successfully"); });
    console.log('done');
  }

}
