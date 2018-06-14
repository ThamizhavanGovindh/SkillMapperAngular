import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';
import { SkillsModel } from '../SkillsModel';
// import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-skill-rgstr',
  templateUrl: './skill-rgstr.component.html',
  styleUrls: ['./skill-rgstr.component.css']
})
export class SkillRgstrComponent implements OnInit {

  employeemodel: EmployeeModel = new EmployeeModel();
  skillModel: SkillModel = new SkillModel();
  skillupdate: SkillModel = new SkillModel;
  skillsModel: SkillsModel = new SkillsModel();
  skillmodel: SkillModel = new SkillModel();
  skilid: SkillModel = new SkillModel();
  @Input() employee:EmployeeModel;
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }
  skillRegister(): void {
     
    this.skillupdate.empMaster.employee_Id = this.employee.employee_Id;    
    this.skillupdate.placementCount = this.skillModel.placementCount;
    this.skillupdate.batchCount = this.skillModel.batchCount;
    this.skillupdate.experiance = this.skillModel.experiance;
    this.skillupdate.status = 'Not Approved';
    this.skillupdate.numStudentHandled = this.skillModel.numStudentHandled; 
    // this.skillsModel.certificate = this.skillModel.certificate;
    // this.skillsModel.skill = this.skillModel.skill;   
    this.employeeService.addSkillSet(this.skillupdate).subscribe(data=>{alert("Skillset Registerd Successfully");
  });
  console.log('done done');
  
  this.employeeService.getskillId(this.employee.employee_Id).subscribe(data=>this.skilid=data);
  
    this.skillsRegister();
  }
  skillsRegister(): void{
    this.skillsModel.skillSet.empMaster.employee_Id=this.skillupdate.empMaster.employee_Id;  
    this.skillsModel.skillSet.skillId = this.skilid.skillId;      
      console.log('Certification is '+this.skillsModel.certificate);
      console.log('skill is '+this.skillsModel.skill );
      console.log('skill id is '+this.skilid.skillId);
      console.log('skill id is '+this.skillsModel.skillSet.skillId);
      console.log('employee id is '+this.skillsModel.skillSet.empMaster.employee_Id);
      this.employeeService.SkillsReg(this.skillsModel).subscribe(data=>{alert("Skill Registerd Successfully");
  });
  }
}
