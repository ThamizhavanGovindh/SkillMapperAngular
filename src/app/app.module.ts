import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SkillRegistrationComponent } from './skill-registration/skill-registration.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { ViewSkillComponent } from './view-skill/view-skill.component';
import { SkillRgstrComponent } from './skill-rgstr/skill-rgstr.component';
import { SkillUpdateSelectComponent } from './skill-update-select/skill-update-select.component';
import { SkillUpdateComponent } from './skill-update/skill-update.component';
import { HRHomeComponent } from './hrhome/hrhome.component';
import { HRApprovalComponent } from './hrapproval/hrapproval.component';
import { HRViewEmployeeComponent } from './hrview-employee/hrview-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    SkillRegistrationComponent,
    SkillSearchComponent,
    ViewSkillComponent,
    SkillRgstrComponent,
    SkillUpdateSelectComponent,
    SkillUpdateComponent,
    HRHomeComponent,
    HRApprovalComponent,
    HRViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
