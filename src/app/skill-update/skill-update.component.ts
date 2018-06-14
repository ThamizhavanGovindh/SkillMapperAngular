import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';
import { SkillsModel } from '../SkillsModel';

@Component({
  selector: 'app-skill-update',
  templateUrl: './skill-update.component.html',
  styleUrls: ['./skill-update.component.css']
})
export class SkillUpdateComponent implements OnInit {

  employeemodel: EmployeeModel = new EmployeeModel();
  skillModel: SkillsModel = new SkillsModel();
  @Input() skilMdl:SkillModel;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }

  skillUpdate(): void{    
    // this.skillModel.empMaster = this.employee;
    this.skillModel.skillSet = this.skilMdl;
    this.employeeService.SkillsReg(this.skillModel).subscribe(data=>{alert("Skill updated successfully"); });
  }
}
