import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';
import { WomenService } from 'src/app/services/women.service';

@Component({
  selector: 'app-women-list',
  templateUrl: './women-list.component.html',
  styleUrls: ['./women-list.component.css'],
})
export class WomenListComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    public womenService: WomenService,
    public apiService: ApiService,
    public nav: Router
  ) {}

  ngOnInit(): void {}
}
