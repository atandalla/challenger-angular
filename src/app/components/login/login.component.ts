import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,
              private router: Router){}
  
  user = {
    username: '',
    password: '',
  };

  submitLogin(){
    console.log(this.user)
    this.authService.loginUser(this.user)
    .subscribe(
      res => {
        //console.log("respuesta")
        console.log(res.token)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/config-bot'])
      },
      err => {
        console.log(err)
        this.router.navigate(['/'])
      }
    )
  }
  
}
