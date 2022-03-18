import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form= new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  constructor(private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.connect(this.form.value).subscribe(response => {
      this.tokenStorageService.setToken(response['access_token']);
      this.router.navigate(['/dashboard']);
    })
  }


}
