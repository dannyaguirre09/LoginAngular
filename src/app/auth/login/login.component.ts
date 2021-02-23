import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  submitted = false;
  badCredential = true;

  constructor(private authService:AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

 get f() {return this.form.controls;}

  onLogin():void {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    
    this.authService.login(this.form.value).subscribe(
      data =>  this.router.navigateByUrl('/home/index'),
      error => alert(error.error.error_description)
    );
  }  

}
