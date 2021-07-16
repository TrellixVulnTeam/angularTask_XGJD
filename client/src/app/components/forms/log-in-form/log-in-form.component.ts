import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
})
export class LogInFormComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public apiService: ApiService,
    public nav: Router
  ) {}

  ngOnInit(): void {}
}
