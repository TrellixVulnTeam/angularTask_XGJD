import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, Woman } from '../models/models';
import { ApiService } from './api.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class WomenService {
  _womenARR: Array<Woman> = [];
  _currentUser: Array<User> = [];
  result: any = {};
  addVsEdit: number = 0;

  _womanNameInput: string = '';
  _dateOfBirthInput: string = '';
  _countryInput: string = '';
  _descriptionInput: string = '';
  constructor(
    public apiService: ApiService,
    public nav: Router // public userService: UsersService
  ) {}
  // api:  http://www.localhost:5004/women/getWomenByUserID?UserID=1
  async getWomenByUserID(url: string) {
    this._womenARR = (await this.apiService.createGetService(
      url
    )) as Array<Woman>;
    console.log('_womenARR: ', this._womenARR);
  }

  async addWomanByUserID(url: string, userId?: number) {
    if (
      this._womanNameInput === '' ||
      this._dateOfBirthInput === '' ||
      this._countryInput === '' ||
      this._descriptionInput === ''
    ) {
      alert('All fields must be provided');
    } else {
      let newWomanOB = {
        WomanName: this._womanNameInput,
        DateOfBirth: this._dateOfBirthInput,
        Country: this._countryInput,
        Description: this._descriptionInput,
        UserID: userId,
      };

      console.log('newWomanOB: ', newWomanOB);
      this.result = (await this.apiService.createPostService(
        url,
        newWomanOB
      )) as any;
      this._womanNameInput = '';
      this._dateOfBirthInput = '';
      this._countryInput = '';
      this._descriptionInput = '';
      this.getWomenByUserID(`/women/getWomenByUserID?UserID=${userId}`);
      console.log('_womenARR WITH NEW: ', this._womenARR);
      this.nav.navigate(['womenList']);
    }
  }

  editClicked = (womanId: number) => {
    let womanToEdit = this._womenARR.find((woman) => woman.ID == womanId);
    console.log('womanToEdit: ', womanToEdit);
    if (womanToEdit === undefined) {
      console.log('womanToEdit === undefined: ');
    } else {
      this._womanNameInput = womanToEdit.WomanName;
      this._dateOfBirthInput = womanToEdit.DateOfBirth;
      this._countryInput = womanToEdit.Country;
      this._descriptionInput = womanToEdit.Description;
    }
    // this.addVsEdit = 1;
    this.nav.navigate(['forms/addWoman']);
  };

  async updateWomen(url: string, womanId?: number, userId?: number) {
    if (
      this._womanNameInput === '' ||
      this._dateOfBirthInput === '' ||
      this._countryInput === '' ||
      this._descriptionInput === ''
    ) {
      alert('All fields must be provided');
    } else {
      let newWomanOB = {
        ID: womanId,
        WomanName: this._womanNameInput,
        DateOfBirth: this._dateOfBirthInput,
        Country: this._countryInput,
        Description: this._descriptionInput,
        UserID: userId,
      };

      console.log('newWomanOB: ', newWomanOB);
      this.result = (await this.apiService.createPostService(
        url,
        newWomanOB
      )) as any;
      this.getWomenByUserID(`/women/getWomenByUserID?UserID=${userId}`);
      console.log('_womenARR WITH NEW: ', this._womenARR);
      this.nav.navigate(['womenList']);
    }
  }
  // URL:   http://www.localhost:5004/women/updateWomen

  async deleteWomen(url: string, ID?: number, userId?: number) {
    // console.log('userId: ', userId);
    // console.log('url: ', url);
    this.result = (await this.apiService.createGetService(url + ID)) as any;
    this.getWomenByUserID(`/women/getWomenByUserID?UserID=${userId}`);
    console.log('_womenARR AFTER delete: ', this._womenARR);
    this.nav.navigate(['womenList']);
  }
  // URL:   http://www.localhost:5004/women/deleteWomanByID?ID=
}
