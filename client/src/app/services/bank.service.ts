import { Injectable } from '@angular/core';
import { Action } from '../models/models';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class BankService {
  _actions: Array<Action> = [];
  result: any = {};
  _accountInput: string = '';

  _currentActionType: number = 0;
  _currentAccountID: number = 0;
  _currentAmount: number = 0;
  _currentCredit: number = 0;
  _currentPayQnt: number = 0;
  constructor(public apiService: ApiService) {}

  async getAllActionsById(url: string) {
    this._actions = (await this.apiService.createGetService(
      `${url}?AccountID=${this._accountInput}`
    )) as Array<Action>;
    console.log('Action: ', this._actions);
  }

  async addNewAction(url: string, ob: any) {
    console.log('url: ', url, '  ob: ', ob);
    this.result = (await this.apiService.createPostService(url, ob)) as any;
    console.log('result: ', this.result);
    if (this.result.affectedRows === 1)
      this.getAllActionsById('/accounts/getActionsById');
  }

  actionTypeClick = (type: number) => {
    this._currentActionType = type;
    console.log('type: ', this._currentActionType);
  };

  addNewActionClick = () => {
    let newAction = {
      AccountID: this._currentAccountID,
      ActionType: this._currentActionType,
      Amount: this._currentAmount,
      Credit: this._currentCredit,
      payQnt: this._currentPayQnt,
    };
    console.log('newAction: ', newAction);
    this.addNewAction('/account/actions/addAction', newAction);
  };
}
