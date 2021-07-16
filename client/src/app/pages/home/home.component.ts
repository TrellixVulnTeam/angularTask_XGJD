import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public apiService: ApiService,
    public nav: Router
  ) {}

  ngOnInit(): void {}
}
