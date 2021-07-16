import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent implements OnInit {
  constructor(
    public tasksService: TasksService,
    public apiService: ApiService,
    public nav: Router
  ) {}

  ngOnInit(): void {}
}
