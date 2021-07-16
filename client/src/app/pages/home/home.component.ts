import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public tasksService: TasksService,
    public apiService: ApiService,
    public nav: Router
  ) {
    this.tasksService.getCustomers('/customers/getAllCustomers');
  }

  ngOnInit(): void {}
}
