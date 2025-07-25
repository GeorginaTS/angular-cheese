import { UserService } from '@/services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: FormControl
  password: FormControl 
  loginForm: FormGroup;
  logged: boolean = false

  constructor(private router: Router, private userService: UserService) {
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }
  login() {
    console.log(this.loginForm.value);
    try {
      this.userService.login(this.loginForm.value).subscribe((res) => {
        if (res) {
          console.log("res Login", res)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
