import { Component, OnInit, Input } from '@angular/core';
import {EmployeeModel} from '../EmployeeModel';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import { SkillModel } from '../SkillModel';
import { SkillsModel } from '../SkillsModel';

@Component({
  selector: 'app-view-skill',
  templateUrl: './view-skill.component.html',
  styleUrls: ['./view-skill.component.css']
})
export class ViewSkillComponent implements OnInit {

  @Input() skillmdlArr: SkillsModel[];
  employee: EmployeeModel;
  skillset: SkillModel;
  constructor() { }

  ngOnInit() {
  }

}
