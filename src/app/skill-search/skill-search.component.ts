import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {EmployeeModel} from '../EmployeeModel';
import {Router} from '@angular/router';
import {SkillModel} from '../SkillModel';
import {SkillsModel} from '../SkillsModel';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.css']
})
export class SkillSearchComponent implements OnInit {

  skillmdlArr: SkillsModel[];
  skillmdl: SkillsModel = new SkillsModel();
  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }
  skillsearch(): void{
      console.log('skill is '+this.skillmdl.skill);
      this.employeeService.getSkill(this.skillmdl.skill).subscribe(data=>this.skillmdlArr=data);    
      
  }
}
