import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/models';
import { ApiService } from './api.service';
import { WomenService } from './women.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _currentUser: Array<User> = [];
  _isAuthenticated: boolean = false;
  _emailInput: string = '';
  _PWDInput: string = '';
  _currentUserID: number = 0;
  result: any = {};
  constructor(
    public womenService: WomenService,
    public apiService: ApiService,
    public route: ActivatedRoute,
    public nav: Router
  ) {}

  async getUserByEmail(url: string) {
    if (this._PWDInput === '' || this._emailInput === '') {
      alert('Please enter email and password');
    } else {
      this._currentUser = (await this.apiService.createGetService(
        `${url}?Email=${this._emailInput}&Password=${this._PWDInput}`
      )) as Array<User>;
      console.log('_currentUser: ', this._currentUser);
      this._currentUserID = this._currentUser[0].ID;
      this.womenService.getWomenByUserID(
        `/women/getWomenByUserID?UserID=${this._currentUser[0].ID}`
      );
      this.nav.navigate(['womenList']);
    }
  }
  // url:  http://www.localhost:5004/users/getUserByEmail?Email='zoe@gmail.com'&Password='111'

  // isAuthenticated = () => {
  //   this._isAuthenticated
  //     ? (this._isAuthenticated = false)
  //     : (this._isAuthenticated = true);

  //   console.log('_isAuthenticated Now', this._isAuthenticated);
  // };

  isAuthenticated = () => {
    if (this._isAuthenticated) {
      this._isAuthenticated = false;
      this.nav.navigate(['']);
      this._currentUser = [];
    } else {
      this.nav.navigate(['forms/logIn']);
      this._isAuthenticated = true;
    }
    console.log('_isAuthenticated Now', this._isAuthenticated);
  };
}
