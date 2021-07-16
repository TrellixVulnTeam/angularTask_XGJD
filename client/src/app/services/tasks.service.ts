import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, Task } from '../models/models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  _customersARR: Array<Customer> = [];
  _tasksARR: Array<Task> = [];
  result: any = {};
  // num: number = 0;

  _currentTask: any = {
    Description: '',
    CustomerID: 0,
  };
  constructor(
    public apiService: ApiService,
    public route: ActivatedRoute,
    public nav: Router
  ) {}
  async getCustomers(url: string) {
    this._customersARR = (await this.apiService.createGetService(
      url
    )) as Array<Customer>;
    console.log('_customersARR: ', this._customersARR);
    this.getTasks('/tasks/getAllTasks');
    this.nav.navigate(['tasksList']);
  }
  // URL:   http://www.localhost:5004/customers/getAllCustomers

  async getTasks(url: string) {
    this._tasksARR = (await this.apiService.createGetService(
      url
    )) as Array<Task>;
    console.log('_tasksARR: ', this._tasksARR);
    // this.nav.navigate(['tasksList']);
  }
  // URL:   http://www.localhost:5004/tasks/getAllTasks

  async addTask(url: string) {
    if (
      this._currentTask.Description === '' ||
      this._currentTask.CustomerID === 0
    ) {
      alert('All fields must be provided');
    } else {
      let newTaskOB = {
        Description: this._currentTask.Description,
        CustomerID: this._currentTask.CustomerID,
      };

      console.log('newTaskOB: ', newTaskOB);
      this.result = (await this.apiService.createPostService(
        url,
        newTaskOB
      )) as any;
      this._currentTask.Description = '';
      this._currentTask.CustomerID = 0;

      this.getTasks('/tasks/getAllTasks');
      console.log('_tasksARR: ', this._tasksARR);
      this.nav.navigate(['tasksList']);
    }
  }
  // URL:   http://www.localhost:5004/tasks/insertNewTask
}
