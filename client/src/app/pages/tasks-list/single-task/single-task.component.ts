import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/models';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css'],
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task = new Task();

  constructor() {}

  ngOnInit(): void {}
}
