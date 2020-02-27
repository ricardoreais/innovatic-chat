import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      // TODO: Add some more user name validations.
      name: new FormControl('', Validators.required)
    });
  }

  login(user: User) {
    // These are all hard-coded values, I know :(
    user.id = 101;
    // Here we should call an actual login not a register,
    // but I had no time to implement this because I focused more on the messaging feature.
    this.userService.register(user);
    this.router.navigate([environment.defaultPage]);
    this.snackBar.open(`Welcome back ${user.name}`, 'Dismiss', {
      duration: 2000,
    });
  }
}
