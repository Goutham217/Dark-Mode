import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee/employee.service';
import { AuthService } from '../users/auth.service';
import { User } from '../users/user.model';
import { UtilitiesService } from '../utilities.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isThemeDark!: Observable<boolean>;

  newEmployee: User = {

    employeeId: 0,
    managerId: 0,
    firstName: '',
    lastName: '',
    email:'',
    userName: '',
    password: '',
    managerType: false
  }

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private activatedRoute: ActivatedRoute, 
    private employeeService: EmployeeService, 
    private router: Router, 
    private authService: AuthService, 
    private utilitiesService: UtilitiesService,
    private darkModeService: DarkModeService ) { }

  ngOnInit(): void {

    this.isThemeDark = this.utilitiesService.isThemeDark;

  }

  hasLoggedIn(){
    return this.authService.isLoggedIn;
  }

  getManagerType(){
    return this.authService.managerType;
  }

  hasLoggedOut(): void{
    this.authService.removeUserInfo();
  }

  retrieveUserInfo(){
    this.newEmployee = this.authService.retreiveUserInfo();
    return this.authService.retreiveUserInfo();
  }

  toggleDarkTheme(checked: { checked: boolean; }) {
    this.utilitiesService.setDarkTheme(checked.checked);

    console.log("checked >", checked.checked);
}

  onToggle(): void{
    this.darkModeService.toggle();
  }
}