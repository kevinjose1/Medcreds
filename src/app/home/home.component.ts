

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiserviceService} from  '../service/apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  isLoading :boolean = false;
  countries: any = ['India', 'USA', 'Norway', 'Italy']
  constructor(private fb: FormBuilder , public apiservice:ApiserviceService) {}
   get registerFormControl() {
    return this.registerForm .controls;
  }

  ngOnInit(): void {
    this.registerForm  = this.fb.group({
      orginaztioname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['India', Validators.required],
      certificatecatecategory: ['', Validators.required],
      certificatecate: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
   if(this.registerForm.valid) {
     this.isLoading = true;
    // console.log(this.registerForm.value)
    this.apiservice.postData('addnewuser', this.registerForm.value).subscribe((data:any) => {
      this.isLoading = false;
      if(data.status === 'Sucess!') {
        alert(data.status)
      } else {
        alert('Mock API Failed');
      }
    })
   }
  }
  
}
