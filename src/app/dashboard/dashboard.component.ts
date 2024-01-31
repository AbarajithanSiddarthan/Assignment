import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RestapiService } from '../services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  studentForm = new FormGroup({
    name:new FormControl('',Validators.required),
    age:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
    sid:new FormControl('',[Validators.required])
  })
  studentDataBase: any = [];
  constructor(public service:RestapiService,private router:Router) { }

  ngOnInit(): void {
    // this.service.getDetails().subscribe((data)=>{
    //   this.studentDataBase = data;
    // })
  }

  create(){
    console.log(this.studentForm.value);
    this.studentForm.value['isEdit'] = false;
    this.studentDataBase.push(this.studentForm.value)
    debugger
    // this.service.createStudent(this.studentForm.value).subscribe((data:any)=>{
    //   console.log(data);
    //   this.studentDataBase.push(data);
    //   this.studentForm.reset();
    // })
  }

  edit(student: any) {
    const index = this.studentDataBase.indexOf(student);
    if (index !== -1) {
      this.studentDataBase[index] = { ...student, isEdit: true };
    }
  }

  update(student: any) {
    let id = student._id;
    student.isEdit = false;
    // delete student._id;
    // const studentString = JSON.stringify(student);
    // this.service.updateStudent(id,studentString).subscribe((data:any)=>{
    //   console.log(data);
    // })
  }
  
  delete(student: any) {
    // this.service.deleteStudent(student).subscribe((data:any)=>{
    //   const index = this.studentDataBase.indexOf(student);
    //   this.studentDataBase.splice(index,1)
    // })
  }

  logout(){
    this.router.navigate(['/login']);
  }

}
