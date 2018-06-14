import { Injectable } from '@angular/core';
import {observable, of, Observable, ObservableInput} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders ,HttpClientModule,} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import {EmployeeModel} from './EmployeeModel';  
import { SkillModel } from './SkillModel';
import { SkillsModel } from './SkillsModel';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  myname :string;
  city:string;
  skillid:number;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor( private http: HttpClient) { }
  
  ApiURL='http://localhost:8080/EmployeeMgmtREST/employees/api';
  getname():string{
    this.myname="NIIT LTD";
    return this.myname;
  }
  
  getCity():Observable<string>{
    this.city="CHENNAI METRO CITY";
    return of(this.city);
  }
  getEmpl(): Observable<string>{

    return this.http.get<string>(this.ApiURL);
  }

  getEmployee(): Observable<EmployeeModel[]>{
    console.log('Get employe method');
    return this.http.get<EmployeeModel[]>(this.ApiURL)
      .pipe(catchError(this.handleError<EmployeeModel[]>('getEmployee',[])));
  }
  getEmployeeforskill(): Observable<SkillModel[]>{
    console.log('Get employe method');
    return this.http.get<SkillModel[]>(this.ApiURL+"/skillupdate")
      .pipe(catchError(this.handleError<SkillModel[]>('getEmployee',[])));
  }

  getEmployeeforapprove():Observable<SkillModel[]>{
    console.log('Get employe method');
    return this.http.get<SkillModel[]>(this.ApiURL+"/getforapprove")
      .pipe(catchError(this.handleError<SkillModel[]>('getEmployee',[])));
  }
  viewEmployeeapproved():Observable<SkillModel[]>{
    console.log('Get employe method');
    return this.http.get<SkillModel[]>(this.ApiURL+"/viewapproveEmp")
      .pipe(catchError(this.handleError<SkillModel[]>('getEmployee',[])));
  }

  getSkill(skill: string): Observable<SkillsModel[]>{
    console.log('get skill method invoked');
    return this.http.get<SkillsModel[]>(this.ApiURL+"/getSkill/"+skill);    
  }

  getskillId(employee_Id: number): Observable<SkillModel>{
    console.log('function invoked');
    return this.http.get<SkillModel
    >(this.ApiURL+"/getskillid/"+employee_Id);
  }
  addEmployee(employeemodel: EmployeeModel): Observable<EmployeeModel>{
    console.log('Employee name is: '+employeemodel.emplyeeName);
    return this.http.post<EmployeeModel>(this.ApiURL+"/add", employeemodel)
  }

  addSkillSet(skillModel: SkillModel): Observable<SkillModel>{
    return this.http.post<SkillModel>(this.ApiURL+"/RegisterSkillSet",skillModel)
  }
  SkillsReg(skillModel: SkillsModel): Observable<SkillsModel>{
    return this.http.post<SkillsModel>(this.ApiURL+"/skillsReg",skillModel)
  }
  skillReg(skillmodel: SkillModel): Observable<SkillModel>{

    return this.http.post<SkillModel>(this.ApiURL+"/addskill",skillmodel);
  }
  approveEmpSer(skillmodel: SkillModel):Observable<SkillModel>{

    return this.http.post<SkillModel>(this.ApiURL+"/approveEmpl",skillmodel);
  }

  public deleteEmployee(employee){
    return this.http.delete(this.ApiURL+"/delete/"+employee.employee_Id);
  }  
  public editEmployee(employee:EmployeeModel){    
    return this.http.put<EmployeeModel>(this.ApiURL+"/update", employee)
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T);
    };
  }

}
