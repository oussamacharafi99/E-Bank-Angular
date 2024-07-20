import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../models/user';
import { JwtDto } from '../models/jwt-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserServiceService , private route : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      
      const user: User = this.loginForm.value;
      this.userService.login(user)
      .subscribe(res => {
        localStorage.setItem('jwtData', JSON.stringify(res));
        
        this.route.navigateByUrl("/choice");
      });
    } else {
      console.log('Form is invalid.');
    }
  }
  
  onGet(): void {
    const storedJwtData = localStorage.getItem('jwtData');
    if (storedJwtData) {
        const jwtData: JwtDto = JSON.parse(storedJwtData);
        const token = jwtData.token;
        const userId = jwtData.user_id;
        
        console.log('Token:', token);
        console.log('User ID:', userId);
    } else {
        console.log('No JWT data found in localStorage.');
    }
}
  
  

}
