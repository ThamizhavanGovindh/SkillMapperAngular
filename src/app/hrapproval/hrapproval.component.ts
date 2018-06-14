import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';
import {Router} from '@angular/router';
import {SkillModel} from '../SkillModel';
@Component({
  selector: 'app-hrapproval',
  templateUrl: './hrapproval.component.html',
  styleUrls: ['./hrapproval.component.css']
})
export class HRApprovalComponent implements OnInit {

  
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
    this.employeeService.getEmployeeforapprove().subscribe(data=>this.skillmodel=data);
    console.log('data retrived');
  }

  aproveEmp(skilMdl: SkillModel): void{
    this.skillmod = skilMdl;
    this.skillmod.status='Approved';
    this.employeeService.approveEmpSer(this.skillmod).subscribe(data=>{alert("Employee approved successfully"); });
  }

}
